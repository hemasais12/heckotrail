package com.narenkg.hecko.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.constants.IMessage;
import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.SignupRequest;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.jwt.JwtUtils;
import com.narenkg.hecko.security.services.UserDetailsImpl;
import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.RoleService;
import com.narenkg.hecko.services.UserService;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService userService;

	@Autowired
	private RoleService roleService;

	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private MessageService messageService;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity
				.ok(new JwtResponse(jwt, userDetails.getId(), userDetails.getEmail(), userDetails.getPhone(), roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userService.existsByEmailOrPhone(signUpRequest.getEmail(), signUpRequest.getPhone())) {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(IMessage.SIGNUP_USER_ALREADY_EXISTS)));
		}

		// Create new user's account
		User user = new User(signUpRequest.getEmail(), signUpRequest.getPhone(),
				encoder.encode(signUpRequest.getPassword()));
		
		Message message = null;

		if (signUpRequest.getIsVendor()) {
			user.setRoles(roleService.getVendorRoles());
			message = messageService.getMessage(IMessage.SIGNUP_VENDOR_SUCCESS);
		}
		else {
			user.setRoles(roleService.getUserRoles());
			message = messageService.getMessage(IMessage.SIGNUP_USER_SUCCESS);
		}

		userService.save(user);

		return ResponseEntity.ok(
				new ApiResponse(EApiResponseType.SUCCESS, message));
	}
}
