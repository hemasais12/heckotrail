package com.narenkg.hecko.controllers;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.services.MessageService;

@RestController
@RequestMapping("/api/sms")
public class SmsController {
	@Autowired
	private MessageService messageService;

	@GetMapping(value = "/sendSMS")
	public ResponseEntity<?> sendSMS() {
		try {
			return new ResponseEntity<String>("Message sent successfully", HttpStatus.OK);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}
}
