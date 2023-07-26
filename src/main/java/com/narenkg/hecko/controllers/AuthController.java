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

	@Autowired
	private OtpService otpService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("/signin/verifyemailormobilenumber")
	public ResponseEntity<?> verifyEmailOrMobileNumber(@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {

		String emailOrMobileNumber = emailOrMobileNumberInput.getEmailOrMobileNumber();

		logger.info("registerEmailOrMobileNumber: ------------------------> " + emailOrMobileNumber);

		if (GeneralUtil.isEmail(emailOrMobileNumber) || GeneralUtil.isMobileNumber(emailOrMobileNumber)) {

			try {

				if (userService.existsByEmailOrMobileNumber(emailOrMobileNumber)) {

					if (!GeneralUtil.isEmail(emailOrMobileNumber)) {
						otpService.generateOTP(emailOrMobileNumber);
					}
					return ResponseEntity.ok(
							new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));
				} else {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNIN_USER_NOTFOUND)));
				}
			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));

		} else {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.NOT_VALID_EMAIL_OR_MOBILENUMBER)));
		}

	}

	@PostMapping("/signin/byemail")
	public ResponseEntity<?> authenticateByEmail(@Valid @RequestBody LoginRequest loginRequest) {

		String email = loginRequest.getEmail();
		String password = loginRequest.getPassword();

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(email, password));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		return userService.verifyUserForLogin(loginRequest.getEmail(), jwt);
	}

	@PostMapping("/signin/bymobileNumber")
	public ResponseEntity<?> authenticateByMobileNumber(@Valid @RequestBody MobileLoginRequest mobileNumberLoginRequest) {

		try {
			if (mobileNumberLoginRequest.getOtp().equals(otpService.getCacheOtp(mobileNumberLoginRequest.getMobileNumber()))) {

				logger.info("authenticateByMobileNumber: ----------------1--------> " + mobileNumberLoginRequest.getMobileNumber());

				User user = userService.findByMobileNumber(mobileNumberLoginRequest.getMobileNumber());

				Authentication authentication = authenticationManager
						.authenticate(new UsernamePasswordAuthenticationToken(mobileNumberLoginRequest.getMobileNumber(), mobileNumberLoginRequest.getMobileNumber()));

				logger.info("authenticateByMobileNumber: --------------2----------> " + mobileNumberLoginRequest.getMobileNumber());

				SecurityContextHolder.getContext().setAuthentication(authentication);
				String jwt = jwtUtils.generateJwtToken(authentication);

				return userService.verifyUserForLogin(mobileNumberLoginRequest.getMobileNumber(), jwt);

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return ResponseEntity.badRequest()
				.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));

	}

	@PostMapping("/signup/registeremailormobileNumber")
	public ResponseEntity<?> registerEmailOrMobileNumber(@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {

		String emailOrMobileNumber = emailOrMobileNumberInput.getEmailOrMobileNumber();

		logger.info("registerEmailOrMobileNumber: ------------------------> " + emailOrMobileNumber);

		if (GeneralUtil.isEmail(emailOrMobileNumber) || GeneralUtil.isMobileNumber(emailOrMobileNumber)) {

			if (userService.existsByEmailOrMobileNumber(emailOrMobileNumber)) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));

			}
			try {

				if (!GeneralUtil.isEmail(emailOrMobileNumber)) {
					otpService.generateOTP(emailOrMobileNumber);
				} else {
					otpService.generateEmailOTP(emailOrMobileNumber);
				}
				return ResponseEntity
						.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));

			} catch (Exception ex) {
				ex.printStackTrace();
			}
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		} else {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.NOT_VALID_EMAIL_OR_MOBILENUMBER)));
		}
	}

	@PostMapping("/signup/byemail")
	public ResponseEntity<?> registerByEmail(@Valid @RequestBody EmailSignupRequest signUpRequest) {
		if (userService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
		}

		if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.PASSWORD_NOT_MATCHING)));
		}

		if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(signUpRequest.getEmail()))) {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
		}

		// Create new user's account
		User user = new User(signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));
		user.setIsBlocked(false);
		user.setIsVerified(true);

		userService.save(user);

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(signUpRequest.getEmail(), signUpRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		return userService.doFirstLogin(user, jwt);

	}

	@PostMapping("/signup/bymobileNumber")
	public ResponseEntity<?> registerByMobileNumber(@Valid @RequestBody MobileSignupRequest signUpRequest) {
		if (userService.existsByMobileNumber(signUpRequest.getMobileNumber())) {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
		}

		if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(signUpRequest.getMobileNumber()))) {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
		}
		User user = new User(signUpRequest.getMobileNumber());
		user.setIsBlocked(false);
		user.setIsVerified(true);
		
		user.setMobilePassword(encoder.encode(signUpRequest.getMobileNumber()));

		userService.save(user);
		

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(signUpRequest.getMobileNumber(), signUpRequest.getMobileNumber()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		return userService.doFirstLogin(user, jwt);

		// Create new user's account

	}
	
	@PostMapping("/signup/setroles")
	public ResponseEntity<?> setUserRoles(@Valid @RequestBody MobileSignupRequest signUpRequest) {
		if (userService.existsByMobileNumber(signUpRequest.getMobileNumber())) {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
		}

		if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(signUpRequest.getMobileNumber()))) {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
		}
		User user = new User(signUpRequest.getMobileNumber());
		user.setIsBlocked(false);
		user.setIsVerified(true);
		
		user.setMobilePassword(encoder.encode(signUpRequest.getMobileNumber()));

		userService.save(user);
		

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(signUpRequest.getMobileNumber(), signUpRequest.getMobileNumber()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);

		return userService.doFirstLogin(user, jwt);

		// Create new user's account

	}
}
