package com.narenkg.hecko.controllers.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.controllers.base.BaseAuthController;
import com.narenkg.hecko.payload.request.EmailOrMobileNumberInput;
import com.narenkg.hecko.payload.request.EmailSignupRequest;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.MobileLoginRequest;
import com.narenkg.hecko.payload.request.MobileSignupRequest;
import com.narenkg.hecko.services.client.ClientService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/c/auth")
public class ClientAuthController extends BaseAuthController {
	
	@Autowired
	private ClientService clientService;
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public ClientService getUserService() {
		logger.info("---------------------------Returning client service-----------------------------");
		return clientService;
	}
	
	@PostMapping("/signin/verifyemailormobilenumber")
	public ResponseEntity<?> verifyEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {
		return super.verifyEmailOrMobileNumber(emailOrMobileNumberInput);
	}
	
	@PostMapping("/signin/byemail")
	public ResponseEntity<?> authenticateByEmail(@Valid @RequestBody LoginRequest loginRequest) {
		return super.authenticateByEmail(loginRequest);
	}
	
	@PostMapping("/signin/bymobileNumber")
	public ResponseEntity<?> authenticateByMobileNumber(
			@Valid @RequestBody MobileLoginRequest mobileNumberLoginRequest) {

		return super.authenticateByMobileNumber(mobileNumberLoginRequest);

	}
	
	@PostMapping("/signup/registeremailormobileNumber")
	public ResponseEntity<?> registerEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {
		return super.registerEmailOrMobileNumber(emailOrMobileNumberInput);
	}
	
	@PostMapping("/signup/byemail")
	public ResponseEntity<?> registerByEmail(@Valid @RequestBody EmailSignupRequest signUpRequest) {
		return super.registerByEmail(signUpRequest);
	}
	
	@PostMapping("/signup/bymobileNumber")
	public ResponseEntity<?> registerByMobileNumber(@Valid @RequestBody MobileSignupRequest signUpRequest) {
		return super.registerByMobileNumber(signUpRequest);
	}
	
	@Override
	public String getUsernamePrefix() {
		if(IConstants.hasUsernamePrefix) {
			return IConstants.APP_CLIENT_PREFIX;
		} else return null;
	}

}
