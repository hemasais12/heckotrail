package com.narenkg.hecko.controllers;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@RestController
@RequestMapping("/api/sms")
public class SmsController {
	@GetMapping(value = "/sendSMS")
	public ResponseEntity<String> sendSMS() {

		

		return new ResponseEntity<String>("Message sent successfully", HttpStatus.OK);
	}
}
