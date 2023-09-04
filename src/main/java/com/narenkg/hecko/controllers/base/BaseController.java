package com.narenkg.hecko.controllers.base;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.services.MessageService;

public abstract class BaseController {

	@Autowired
	private MessageService messageService;

	public ResponseEntity<?> sendUnethicalResponse() {
		return ResponseEntity.badRequest().body(
				new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.UNETHICAL_REQUEST)));
	}

}
