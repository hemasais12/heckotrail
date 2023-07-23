package com.narenkg.hecko.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.constants.EMessage;
import com.narenkg.hecko.constants.ICurrency;
import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.models.Currency;
import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.Service;
import com.narenkg.hecko.models.ServiceCategory;
import com.narenkg.hecko.models.ServiceGroup;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.models.enums.EMessageType;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.models.enums.EServiceCategory;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.VendorServiceUpdateRequest;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.UserProfile;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.CategoryRepository;
import com.narenkg.hecko.repository.CurrencyRepository;
import com.narenkg.hecko.repository.MessageRepository;
import com.narenkg.hecko.repository.RoleRepository;
import com.narenkg.hecko.repository.ServiceCategoryRepository;
import com.narenkg.hecko.repository.ServiceGroupRepository;
import com.narenkg.hecko.repository.ServiceRepository;
import com.narenkg.hecko.services.CategoryService;
import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.ServiceCategoryService;
import com.narenkg.hecko.services.ServiceGroupService;
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
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(message)));

		}

		return ResponseEntity.badRequest()
				.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(message)));

	}

}
