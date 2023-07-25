package com.narenkg.hecko.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.payload.request.VendorServiceUpdateRequest;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.VendorServiceService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/vendor")
public class VendorController {

	@Autowired
	private VendorServiceService vendorServiceService;

	@Autowired
	private MessageService messageService;

	@PostMapping("/setServicePrice")
	public ResponseEntity<?> setServicePrice(
			@Valid @RequestBody VendorServiceUpdateRequest vendorServiceUpdateRequest) {

		EMessage message = vendorServiceService.updateVendorService(vendorServiceUpdateRequest);

		switch (message) {
		case VENDOR_UPDATE_SERVICE_SUCCESS:
			return ResponseEntity.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(message)));
		default:
			break;
		}

		return ResponseEntity.badRequest()
				.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(message)));

	}

}
