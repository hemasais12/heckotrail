package com.narenkg.hecko.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.consts.ICurrency;
import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.models.TaskCategory;
import com.narenkg.hecko.models.TaskSubCategory;
import com.narenkg.hecko.models.common.Category;
import com.narenkg.hecko.models.common.Currency;
import com.narenkg.hecko.models.common.Message;
import com.narenkg.hecko.models.common.Role;
import com.narenkg.hecko.models.enums.EMessageType;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.models.enums.ETaskCategory;
import com.narenkg.hecko.repository.CategoryRepository;
import com.narenkg.hecko.repository.CurrencyRepository;
import com.narenkg.hecko.repository.MessageRepository;
import com.narenkg.hecko.repository.RoleRepository;
import com.narenkg.hecko.repository.TaskCategoryRepository;
import com.narenkg.hecko.repository.TaskSubCategoryRepository;
import com.narenkg.hecko.repository.TaskRepository;
import com.narenkg.hecko.services.CategoryService;
import com.narenkg.hecko.services.TaskCategoryService;
import com.narenkg.hecko.services.TaskSubCategoryService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/init")
public class InitController {

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private CurrencyRepository currencyRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private MessageRepository messageRepository;

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private TaskCategoryRepository taskCategoryRepository;

	@Autowired
	private TaskCategoryService taskCategoryService;

	@Autowired
	private TaskSubCategoryRepository taskSubCategoryRepository;

	@Autowired
	private TaskSubCategoryService taskSubCategoryService;

	@Autowired
	private TaskRepository taskRepository;

	private boolean isDBUpdatePending = true;
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	// http://34.16.153.248:5210/api/test/all -- Test app
	// http://34.16.153.248:5210/api/init/init?requestId=0
	@GetMapping("/db")
	public String updateTeamApp(@RequestParam int requestId) throws Exception {
		String msg = "Welcome to the App. " + "Let's Login or SignUp";
		try {

			if (isDBUpdatePending) {
				switch (requestId) {
				case 0:
					setInitialValuesInDB();
					break;
				case 1:
					setDeltaValuesInDB();
					break;
				}
			}
			isDBUpdatePending = false;
		} catch (Exception ex) {
			ex.printStackTrace();
			msg = "There is error in setting up the database. please check.";
		}
		return msg;
	}

	private void setInitialValuesInDB() {
		setRoles();
		setCurrencies();
		setCategories();
		setMessages();
		setTaskCategories();
		setTaskSubCategories();
		setTasks();
	}

	private void setDeltaValuesInDB() {
		newMessages();
		
	}

	private void setCategories() {
		setMessageCategories();
	}

	private void setRoles() {
		ERole roles[] = ERole.values();
		ArrayList<Role> roleList = new ArrayList<Role>();
		for (ERole role : roles) {
			roleList.add(new Role(role));
		}
		roleRepository.saveAll(roleList);
		roleRepository.flush();
	}

	private void setCurrencies() {
		ArrayList<Currency> currencyList = new ArrayList<Currency>();
		for (String[] currencies : ICurrency.CURRENCIES) {
			Currency currency = new Currency();
			currency.setCountry(currencies[0]);
			currency.setSymbol(currencies[1]);
			currency.setShortName(currencies[2]);
			currency.setLongName(currencies[2]);
			currencyList.add(currency);
		}
		currencyRepository.saveAll(currencyList);
		currencyRepository.flush();
	}

	private void setMessageCategories() {
		EMessageType messageTypes[] = EMessageType.values();
		ArrayList<Category> categoryList = new ArrayList<Category>();
		for (EMessageType messageType : messageTypes) {
			Category category = new Category();
			category.setCatFamily(EMessage.Message.name());
			category.setCatKey(messageType.name());
			category.setCatValue(messageType.name());
			categoryList.add(category);
		}
		categoryRepository.saveAll(categoryList);
		categoryRepository.flush();
	}

	private void setMessages() {
		HashMap<String, Category> mapCategories = categoryService.getMapByCatFamily(EMessage.Message.name());
		ArrayList<Message> messageList = new ArrayList<Message>();
		
		String successColor = "Green";
		String errorColor = "Red";

		messageList.add(new Message(errorColor, EMessage.SIGNUP_MOBILE_ALREADY_REGISTERED.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Mobile number is already registered. Please login.",
				"Mobile number is already registered. Please login."));
		
		messageList.add(new Message(errorColor, EMessage.SIGNUP_EMAIL_ALREADY_REGISTERED.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email is already registered. Please login.",
				"Email is already registered. Please login."));

		messageList.add(new Message(errorColor, EMessage.USER_NOT_FOUND.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Could not find Email/MobileNumber.", "Could not find Email/MobileNumber."));

		messageList.add(new Message(successColor, EMessage.SIGNUP_USER_SUCCESS.name(),
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"User successfuly registered.", "User successfuly registered."));

		messageList.add(new Message(errorColor, EMessage.SIGNIN_EMAIL_NOTVERIFIED.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email/MobileNumber not verified. Please verify by OTP/Email.",
				"Email/MobileNumber not verified. Please verify by OTP/Email."));

		messageList.add(
				new Message(errorColor, EMessage.SIGNIN_ACCOUNT_BLOCKED.name(), mapCategories.get(EMessageType.ERROR.name()),
						EMessageType.ERROR.name(), "Your account is blocked. Please contact support.",
						"Your account is blocked. Please contact support."));

		messageList.add(new Message(errorColor, EMessage.SIGNIN_MOBILE_NOTFOUND.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Mobile is not registered. Please register.", "Mobile is not registered. Please register."));
		
		messageList.add(new Message(errorColor, EMessage.SIGNIN_EMAIL_NOTFOUND.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email is not registered. Please register.", "Email is not registered. Please register."));

		messageList
				.add(new Message(successColor, EMessage.SIGNIN_SUCCESS.name(), mapCategories.get(EMessageType.SUCCESS.name()),
						EMessageType.SUCCESS.name(), "Signin Successful.", "Signin Successful."));
		
		messageList
		.add(new Message(errorColor, EMessage.VENDOR_UPDATE_SERVICE_FAILED.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Vendor service update failed.", "Vendor service update failed"));
		
		messageList
		.add(new Message(successColor, EMessage.VENDOR_UPDATE_SERVICE_SUCCESS.name(), mapCategories.get(EMessageType.SUCCESS.name()),
				EMessageType.SUCCESS.name(), "Vendor service update successful.", "Vendor service update successful."));
		
		messageList
		.add(new Message(successColor, EMessage.OTP_GENERATE_SUCCESS.name(), mapCategories.get(EMessageType.SUCCESS.name()),
				EMessageType.SUCCESS.name(), "Otp sent successfully.", "Otp sent successfully."));
		
		messageList
		.add(new Message(errorColor, EMessage.OTP_GENERATE_FAILED.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Couldn't send OTP, please try again later.", "Couldn't send OTP, please try again later."));
		
		messageList
		.add(new Message(errorColor, EMessage.OTP_EXPIRED_OR_WRONG.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "OTP is expired or wrong. Please try again.", "OTP is expired or wrong. Please try again."));
		
		messageList
		.add(new Message(errorColor, EMessage.TECHNICAL_ISSUE.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Technical error. Please try again.", "Technical error. Please try again."));
		
		messageList
		.add(new Message(successColor, EMessage.GOOD_TO_GO.name(), mapCategories.get(EMessageType.SUCCESS.name()),
				EMessageType.SUCCESS.name(), "Good to go next step.", "Good to go next step."));
		
		messageList
		.add(new Message(errorColor, EMessage.NOT_VALID_EMAIL.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Email entered is not valid.", "Email entered is not valid."));
		
		messageList
		.add(new Message(errorColor, EMessage.NOT_VALID_MOBILENUMBER.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Mobile number entered is not valid.", "Mobile number entered is not valid."));
		
		messageList
		.add(new Message(errorColor, EMessage.PASSWORD_NOT_MATCHING.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Passwords not matching.", "Passwords not matching."));
		
		messageList
		.add(new Message(errorColor, EMessage.REFFERAL_CODE_INCORRECT.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Incorrect referral code. Please re-enter.", "Incorrect referral code. Please re-enter."));
		
		messageList
		.add(new Message(errorColor, EMessage.UNETHICAL_REQUEST.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Unethical request. If this is continued, this IP will be blocked.", "Unethical request. If this is continued, this IP will be blocked."));

		messageRepository.saveAll(messageList);
		messageRepository.flush();
	}
	
	private void newMessages() {
		HashMap<String, Category> mapCategories = categoryService.getMapByCatFamily(EMessage.Message.name());
		ArrayList<Message> messageList = new ArrayList<Message>();
		
		String successColor = "Green";
		String errorColor = "Red";
		
		
		
		messageRepository.saveAll(messageList);
		messageRepository.flush();
	}

	private void setTaskCategories() {

		String[][] taskCategories = { { "Bike Service", ETaskCategory.BikeTask.name() },
				{ "Car Service", ETaskCategory.CarTask.name() } };

		ArrayList<TaskCategory> taskCategoryList = new ArrayList<TaskCategory>();
		for (String[] taskCategoryNames : taskCategories) {
			TaskCategory taskCategory = new TaskCategory();
			taskCategory.setName(taskCategoryNames[0]);
			taskCategory.setIdentifier(taskCategoryNames[1]);
			taskCategory.setIsActive(true);
			taskCategoryList.add(taskCategory);
		}
		taskCategoryRepository.saveAll(taskCategoryList);
		taskCategoryRepository.flush();
	}

	private void setTaskSubCategories() {

		HashMap<String, String[]> taskSubCategories = new HashMap<String, String[]>();

		String[] bikeTaskSubCategories = { "General", "Cleaning", "Wiring", "Oiling", "Engine", "Tyres" };
		String[] carTaskSubCategories = { "General", "Cleaning", "Wiring", "Oiling", "Engine", "Tyres" };

		taskSubCategories.put(ETaskCategory.BikeTask.name(), bikeTaskSubCategories);

		taskSubCategories.put(ETaskCategory.CarTask.name(), carTaskSubCategories);

		ETaskCategory taskCategories[] = ETaskCategory.values();

		ArrayList<TaskSubCategory> taskSubCategoryList = new ArrayList<TaskSubCategory>();

		for (ETaskCategory eTaskCategory : taskCategories) {
			TaskCategory taskCategory = taskCategoryService.getTaskCategory(eTaskCategory.name(), true);

			String[] subCategoryArr = taskSubCategories.get(eTaskCategory.name());

			for (String subCategoryName : subCategoryArr) {
				TaskSubCategory taskSubCategory = new TaskSubCategory();
				taskSubCategory.setName(subCategoryName);
				taskSubCategory.setTaskCategory(taskCategory);
				taskSubCategory.setIsActive(true);
				taskSubCategory.setIdentifier(subCategoryName);
				taskSubCategoryList.add(taskSubCategory);
			}
		}

		taskSubCategoryRepository.saveAll(taskSubCategoryList);
		taskSubCategoryRepository.flush();
	}

	private void setTasks() {

		HashMap<String, String[]> taskSubCategories = new HashMap<String, String[]>();

		String[] bikeTaskSubCategories = { "General", "Cleaning", "Wiring", "Oiling", "Engine", "Tyres" };
		String[] carTaskSubCategories = { "General", "Cleaning", "Wiring", "Oiling", "Engine", "Tyres" };

		taskSubCategories.put(ETaskCategory.BikeTask.name(), bikeTaskSubCategories);

		taskSubCategories.put(ETaskCategory.CarTask.name(), carTaskSubCategories);

		ETaskCategory taskCategories[] = ETaskCategory.values();

		ArrayList<Task> taskList = new ArrayList<Task>();

		for (ETaskCategory eTaskCategory : taskCategories) {
			TaskCategory taskCategory = taskCategoryService.getTaskCategory(eTaskCategory.name(), true);

			String[] taskSubCategoryArr = taskSubCategories.get(eTaskCategory.name());

			for (String taskSubCategoryName : taskSubCategoryArr) {

				TaskSubCategory taskSubCategory = taskSubCategoryService.getTaskSubCategory(taskCategory, taskSubCategoryName,
						true);

				for (int i = 0; i < 10; i++) {
					Task task = new Task();
					String taskName = "0" + i + ": " + taskSubCategoryName + ": " + "Service " + i;
					task.setName(taskName);
					task.setTaskSubCategory(taskSubCategory);
					task.setIsActive(true);
					task.setIdentifier(taskName.replace(" ", ""));
					taskList.add(task);
				}

			}
		}

		taskRepository.saveAll(taskList);
		taskRepository.flush();
	}

	

}
