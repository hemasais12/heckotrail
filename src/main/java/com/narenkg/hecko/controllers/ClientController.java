package com.narenkg.hecko.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.UserService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class ClientController {

	@Autowired
	private UserService userService;

	@Autowired
	private MessageService messageService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());


}
