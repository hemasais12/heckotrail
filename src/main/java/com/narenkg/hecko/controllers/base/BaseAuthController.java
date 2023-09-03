package com.narenkg.hecko.controllers.base;

import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.payload.request.EmailOrMobileNumberInput;
import com.narenkg.hecko.payload.request.EmailSignupRequest;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.MobileLoginRequest;
import com.narenkg.hecko.payload.request.MobileSignupRequest;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.security.jwt.JwtUtils;
import com.narenkg.hecko.services.MessageService;
import com.narenkg.hecko.services.OtpService;
import com.narenkg.hecko.services.ReferralService;
import com.narenkg.hecko.services.UserService;
import com.narenkg.hecko.util.GeneralUtil;

import jakarta.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public abstract class BaseAuthController extends BaseController {
	@Autowired
	private AuthenticationManager authenticationManager;

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

	public ResponseEntity<?> verifyEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {

		String originalId = GeneralUtil.getUsername(emailOrMobileNumberInput.getEmailOrMobileNumber());
		String prefixedId = emailOrMobileNumberInput.getEmailOrMobileNumber();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 

		try {
			Boolean isInputEmail = emailOrMobileNumberInput.getIsInputEmail();

			if (GeneralUtil.isEmail(originalId) || GeneralUtil.isMobileNumber(originalId)) {

				if (getUserService().existsByEmailOrMobileNumber(originalId)) {

					if (!GeneralUtil.isEmail(originalId)) {
						otpService.generateOTP(prefixedId);
					}
					return ResponseEntity.ok(
							new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));
				} else {
					return ResponseEntity.badRequest()
							.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(
									isInputEmail ? EMessage.SIGNIN_EMAIL_NOTFOUND : EMessage.SIGNIN_MOBILE_NOTFOUND)));
				}

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL, messageService
						.getMessage(isInputEmail ? EMessage.NOT_VALID_EMAIL : EMessage.NOT_VALID_MOBILENUMBER)));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}

	}

	public ResponseEntity<?> authenticateByEmail(@Valid @RequestBody LoginRequest loginRequest) {

		String originalId = GeneralUtil.getUsername(loginRequest.getEmail());
		String prefixedId = loginRequest.getEmail();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 
		
		try {
			String password = loginRequest.getPassword();

			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(prefixedId, password));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);

			return getUserService().verifyUserForLogin(originalId, jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}

	public ResponseEntity<?> authenticateByMobileNumber(
			@Valid @RequestBody MobileLoginRequest mobileNumberLoginRequest) {

		String originalId = GeneralUtil.getUsername(mobileNumberLoginRequest.getMobileNumber());
		String prefixedId = mobileNumberLoginRequest.getMobileNumber();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 

		try {
			if (mobileNumberLoginRequest.getOtp().equals(otpService.getCacheOtp(prefixedId))) {

				Authentication authentication = authenticationManager
						.authenticate(new UsernamePasswordAuthenticationToken(prefixedId, originalId));

				SecurityContextHolder.getContext().setAuthentication(authentication);
				String jwt = jwtUtils.generateJwtToken(authentication);
				
				otpService.clearOtp(prefixedId);

				return getUserService().verifyUserForLogin(originalId, jwt);

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

	public ResponseEntity<?> registerEmailOrMobileNumber(
			@Valid @RequestBody EmailOrMobileNumberInput emailOrMobileNumberInput) {

		String originalId = GeneralUtil.getUsername(emailOrMobileNumberInput.getEmailOrMobileNumber());
		String prefixedId = emailOrMobileNumberInput.getEmailOrMobileNumber();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 

		try {

			long startTime = System.nanoTime();

			logger.info("registerEmailOrMobileNumber:--->" + originalId);

			boolean isInputEmail = emailOrMobileNumberInput.getIsInputEmail();

			if (GeneralUtil.isEmail(originalId) || GeneralUtil.isMobileNumber(originalId)) {

				if (getUserService().existsByEmailOrMobileNumber(originalId)) {
					logger.info("User already exists:--->");
					return ResponseEntity.badRequest()
							.body(new ApiResponse(EApiResponseType.FAIL,
									messageService.getMessage(isInputEmail ? EMessage.SIGNUP_EMAIL_ALREADY_REGISTERED
											: EMessage.SIGNUP_MOBILE_ALREADY_REGISTERED)));
				}

				System.out.println("**************1**********Elapsed Time in mili seconds: "
						+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

				if (!GeneralUtil.isEmail(originalId)) {
					logger.info("generating OTP on phone :--->" + prefixedId);
					otpService.generateOTP(prefixedId);
					logger.info("generated OTP");
				} else {
					logger.info("generating OTP on phone :--->" + prefixedId);
					otpService.generateEmailOTP(prefixedId);
					logger.info("generated OTP");
				}

				System.out.println("***********2*************Elapsed Time in mili seconds: "
						+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

				return ResponseEntity
						.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL, messageService
						.getMessage(isInputEmail ? EMessage.NOT_VALID_EMAIL : EMessage.NOT_VALID_MOBILENUMBER)));
			}
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}

	public ResponseEntity<?> registerByEmail(@Valid @RequestBody EmailSignupRequest signUpRequest) {

		String originalId = GeneralUtil.getUsername(signUpRequest.getEmail());
		String prefixedId = signUpRequest.getEmail();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 

		try {
			if (getUserService().existsByEmail(originalId)) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNUP_EMAIL_ALREADY_REGISTERED)));
			}

			if (!signUpRequest.getPassword().equals(signUpRequest.getConfirmPassword())) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.PASSWORD_NOT_MATCHING)));
			}

			if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(prefixedId))) {
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
			User user = getUserService().getNewEntity(originalId, encoder.encode(signUpRequest.getPassword()));
			user.setIsBlocked(false);
			user.setIsVerified(true);

			otpService.clearOtp(prefixedId);
			
			getUserService().save(user, signUpRequest.getReferralCode());

			logger.info("-------------------------------------Starting---------------------------------------");

			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(prefixedId, signUpRequest.getPassword()));

			logger.info("-------------------------------------Ending---------------------------------------");

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			return getUserService().doFirstLogin(user, jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}

	}

	public ResponseEntity<?> registerByMobileNumber(@Valid @RequestBody MobileSignupRequest signUpRequest) {

		String originalId = GeneralUtil.getUsername(signUpRequest.getMobileNumber());
		String prefixedId = signUpRequest.getMobileNumber();
		
		if(!isUsernamePrefixedProperly(prefixedId))
			return sendUnethicalResponse(); 

		long startTime = System.nanoTime();
		logger.info("registerByMobileNumber:" + signUpRequest.getMobileNumber());
		try {
			if (getUserService().existsByMobileNumber(originalId)) {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNUP_MOBILE_ALREADY_REGISTERED)));
			}

			System.out.println("*****************11*******Elapsed Time in mili seconds: "
					+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

			if (!signUpRequest.getOtp().equals(otpService.getCacheOtp(prefixedId))) {
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

			System.out.println("*****************12*******Elapsed Time in mili seconds: "
					+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

			User user = getUserService().getNewEntity(originalId);
			user.setIsBlocked(false);
			user.setIsVerified(true);

			user.setMobilePassword(encoder.encode(originalId));
			
			otpService.clearOtp(prefixedId);

			getUserService().save(user, signUpRequest.getReferralCode());

			System.out.println("*****************13*******Elapsed Time in mili seconds: "
					+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(prefixedId, originalId));

			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);

			System.out.println("****************14********Elapsed Time in mili seconds: "
					+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

			return getUserService().doFirstLogin(user, jwt);
		} catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.TECHNICAL_ISSUE)));
		}
	}

	public UserService getUserService() {
		return null;
	}

	public Boolean isUsernamePrefixedProperly(String username) {
		if (IConstants.hasUsernamePrefix) {
			if (getUsernamePrefix().equalsIgnoreCase(GeneralUtil.getUsernameType(username))) {
				return true;
			} else
				return false;
		} else {
			return true;
		}
	}

	public String getUsernamePrefix() {
		return null;
	}

}
