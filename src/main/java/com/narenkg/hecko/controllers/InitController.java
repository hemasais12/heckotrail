package com.narenkg.hecko.controllers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.constants.EMessage;
import com.narenkg.hecko.constants.ICurrency;
import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.models.Currency;
import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.enums.EMessageType;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.repository.CategoryRepository;
import com.narenkg.hecko.repository.CurrencyRepository;
import com.narenkg.hecko.repository.MessageRepository;
import com.narenkg.hecko.repository.RoleRepository;
import com.narenkg.hecko.services.CategoryService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
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

	private boolean isDBUpdatePending = true;

	//http://34.16.136.247:5000/all //google cloud url
	// http://localhost:5000/api/test/init?requestId=1
	@GetMapping("/init")
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

		messageList.add(new Message("Red", EMessage.SIGNUP_USER_ALREADY_EXISTS.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email/Phone is already registered. Please try to login.",
				"Email/Phone is already registered. Please try to login."));

		messageList.add(new Message("Red", EMessage.USER_NOT_FOUND.name(), mapCategories.get(EMessageType.ERROR.name()),
				EMessageType.ERROR.name(), "Could not find Email/Phone.", "Could not find Email/Phone."));

		messageList.add(new Message("Green", EMessage.SIGNUP_USER_SUCCESS.name(),
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"User successfuly registered.", "User successfuly registered."));

		messageList.add(new Message("Red", EMessage.SIGNUP_USER_ALREADY_EXISTS.name(),
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"Vendor successfuly registered.", "Vendor successfuly registered."));
		
		messageList.add(new Message("Red", EMessage.SIGNIN_EMAIL_NOTVERIFIED.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email/Phone not verified. Please verify by OTP/Email.",
				"Email/Phone not verified. Please verify by OTP/Email."));

		messageList.add(
				new Message("Red", EMessage.SIGNIN_ACCOUNT_BLOCKED.name(), mapCategories.get(EMessageType.ERROR.name()),
						EMessageType.ERROR.name(), "Your account is blocked. Please contact support.",
						"Your account is blocked. Please contact support."));
		
		messageList.add(new Message("Red", EMessage.SIGNIN_USER_NOTFOUND.name(),
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email/Phone is not registered. Please register.",
				"Email/Phone is not registered. Please register."));
		
		messageList.add(new Message("Red", EMessage.SIGNIN_SUCCESS.name(),
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"Signin Successful.",
				"Signin Successful."));

		messageRepository.saveAll(messageList);
		messageRepository.flush();
	}

	private void newMessages() {
		HashMap<String, Category> mapCategories = categoryService.getMapByCatFamily(EMessage.Message.name());
		ArrayList<Message> messageList = new ArrayList<Message>();

		messageRepository.saveAll(messageList);
		messageRepository.flush();
	}

}
