package com.narenkg.hecko.controllers;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import com.narenkg.hecko.services.ReferralService;
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

	@Autowired
	private ReferralService referralService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@PostMapping("/signin/verifyemailormobilenumber")
	public ResponseEntity<?> verifyEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {

		try {
			String emailOrMobileNumber = emailOrMobileNumberInput.getEmailOrMobileNumber();

			if (GeneralUtil.isEmail(emailOrMobileNumber) || GeneralUtil.isMobileNumber(emailOrMobileNumber)) {

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

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.NOT_VALID_EMAIL_OR_MOBILENUMBER)));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}

	}

	@PostMapping("/signin/byemail")
	public ResponseEntity<?> authenticateByEmail(@Valid @RequestBody LoginRequest loginRequest) {

		try {
			String email = loginRequest.getEmail();
			String password = loginRequest.getPassword();

			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(email, password));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);

			return userService.verifyUserForLogin(loginRequest.getEmail(), jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}

	@PostMapping("/signin/bymobileNumber")
	public ResponseEntity<?> authenticateByMobileNumber(
			@Valid @RequestBody MobileLoginRequest mobileNumberLoginRequest) {

		try {
			if (mobileNumberLoginRequest.getOtp()
					.equals(otpService.getCacheOtp(mobileNumberLoginRequest.getMobileNumber()))) {

				Authentication authentication = authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(mobileNumberLoginRequest.getMobileNumber(),
								mobileNumberLoginRequest.getMobileNumber()));

				SecurityContextHolder.getContext().setAuthentication(authentication);
				String jwt = jwtUtils.generateJwtToken(authentication);

				return userService.verifyUserForLogin(mobileNumberLoginRequest.getMobileNumber(), jwt);

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
			}

		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}

	}

	@PostMapping("/signup/registeremailormobileNumber")
	public ResponseEntity<?> registerEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {
		try {

			String emailOrMobileNumber = emailOrMobileNumberInput.getEmailOrMobileNumber();
			
			logger.info("registerEmailOrMobileNumber:--->"+emailOrMobileNumber);
			
			if (GeneralUtil.isEmail(emailOrMobileNumber) || GeneralUtil.isMobileNumber(emailOrMobileNumber)) {

				if (userService.existsByEmailOrMobileNumber(emailOrMobileNumber)) {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
				}

				if (!GeneralUtil.isEmail(emailOrMobileNumber)) {
					otpService.generateOTP(emailOrMobileNumber);
				} else {
					otpService.generateEmailOTP(emailOrMobileNumber);
				}
				return ResponseEntity
						.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.NOT_VALID_EMAIL_OR_MOBILENUMBER)));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}

	@PostMapping("/signup/byemail")
	public ResponseEntity<?> registerByEmail(@Valid @RequestBody EmailSignupRequest signUpRequest) {
		try {
			if (userService.existsByEmail(signUpRequest.getEmail())) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
			}

			if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.PASSWORD_NOT_MATCHING)));
			}

			if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(signUpRequest.getEmail()))) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
			}

			if (signUpRequest.getReferralCode() != null) {
				String strReferralCode = signUpRequest.getReferralCode().trim();
				if (!strReferralCode.isBlank()) {
					ResponseEntity<?> responseEntity = referralService.verifyReferralCode(strReferralCode);
					if (responseEntity.getStatusCode() != HttpStatus.OK) {
						return responseEntity;
					}
				}
			}

			// Create new user's account
			User user = new User(signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));
			user.setIsBlocked(false);
			user.setIsVerified(true);

			userService.save(user);

			referralService.generateReferralCode(user);

			if (signUpRequest.getReferralCode() != null && !signUpRequest.getReferralCode().trim().isBlank()) {
				referralService.registerSignupViaReferral(user, signUpRequest.getReferralCode().trim());
			}

			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(signUpRequest.getEmail(), signUpRequest.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			return userService.doFirstLogin(user, jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}

	}

	@PostMapping("/signup/bymobileNumber")
	public ResponseEntity<?> registerByMobileNumber(@Valid @RequestBody MobileSignupRequest signUpRequest) {
		try {
			if (userService.existsByMobileNumber(signUpRequest.getMobileNumber())) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNUP_USER_ALREADY_EXISTS)));
			}

			if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(signUpRequest.getMobileNumber()))) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.OTP_EXPIRED_OR_WRONG)));
			}

			if (signUpRequest.getReferralCode() != null) {
				String strReferralCode = signUpRequest.getReferralCode().trim();
				if (!strReferralCode.isBlank()) {
					ResponseEntity<?> responseEntity = referralService.verifyReferralCode(strReferralCode);
					if (responseEntity.getStatusCode() != HttpStatus.OK) {
						return responseEntity;
					}
				}
			}

			User user = new User(signUpRequest.getMobileNumber());
			user.setIsBlocked(false);
			user.setIsVerified(true);

			user.setMobilePassword(encoder.encode(signUpRequest.getMobileNumber()));

			userService.save(user);

			referralService.generateReferralCode(user);

			if (signUpRequest.getReferralCode() != null && !signUpRequest.getReferralCode().trim().isBlank()) {
				referralService.registerSignupViaReferral(user, signUpRequest.getReferralCode().trim());
			}

			Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
					signUpRequest.getMobileNumber(), signUpRequest.getMobileNumber()));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);

			return userService.doFirstLogin(user, jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}
	
	@GetMapping("/testAuth")
	public String testAuth() {
		return "Authenticated URL: "+(new Date());
	}

}
