package com.narenkg.hecko.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.payload.request.EmailOrMobileNumberInput;
import com.narenkg.hecko.payload.request.EmailSignupRequest;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.MobileLoginRequest;
import com.narenkg.hecko.payload.request.MobileSignupRequest;
import com.narenkg.hecko.payload.request.SetRolesRequest;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.UserProfile;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.security.jwt.JwtUtils;
import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.OtpService;
import com.narenkg.hecko.services.RoleService;
import com.narenkg.hecko.services.UserService;
import com.narenkg.hecko.util.GeneralUtil;

import jakarta.validation.Valid;

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
