package com.narenkg.hecko.controllers;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.constants.ICurrency;
import com.narenkg.hecko.constants.IMessage;
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
@RequestMapping("/api")
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

	// http://localhost:2510/api/init?requestId=0
	@GetMapping("/init")
	public String updateTeamApp(@RequestParam int requestId) throws Exception {
		String msg = "Welcome to the App. " + "Let's Login or SignUp";

		if (isDBUpdatePending) {
			switch (requestId) {
			case 0:
				setInitialValuesInDB();
				break;
			}
		}
		isDBUpdatePending = false;
		return msg;
	}

	private void setInitialValuesInDB() {
		setRoles();
		setCurrencies();
		setCategories();
		setMessages();
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
			category.setCatFamily(IMessage.CATEGORY_FAMILY);
			category.setCatKey(messageType.name());
			category.setCatValue(messageType.name());
			categoryList.add(category);
		}
		categoryRepository.saveAll(categoryList);
		categoryRepository.flush();
	}

	private void setMessages() {
		HashMap<String, Category> mapCategories = categoryService.getMapByCatFamily(IMessage.CATEGORY_FAMILY);
		ArrayList<Message> messageList = new ArrayList<Message>();

		messageList.add(new Message("Red", IMessage.SIGNUP_USER_ALREADY_EXISTS,
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Email/Phone is already registered. Please try to login.",
				"Email/Phone is already registered. Please try to login."));
		
		messageList.add(new Message("Red", IMessage.USER_NOT_FOUND,
				mapCategories.get(EMessageType.ERROR.name()), EMessageType.ERROR.name(),
				"Could not find Email/Phone.",
				"Could not find Email/Phone."));
		
		messageList.add(new Message("Green", IMessage.SIGNUP_USER_SUCCESS,
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"User successfuly registered.",
				"User successfuly registered."));
		
		messageList.add(new Message("Red", IMessage.SIGNUP_USER_ALREADY_EXISTS,
				mapCategories.get(EMessageType.SUCCESS.name()), EMessageType.SUCCESS.name(),
				"Vendor successfuly registered.",
				"Vendor successfuly registered."));

		messageRepository.saveAll(messageList);
		messageRepository.flush();
	}

}
