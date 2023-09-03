package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.UserProfile;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;

@Service
public abstract class UserService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	private MessageService messageService;

	@Autowired
	private RoleService roleService;

	@Autowired
	private ReferralService referralService;

	public Boolean existsByEmail(String email) {
		return getUserRepository().existsByEmail(email);
	}

	public Boolean existsByMobileNumber(String mobileNumber) {
		return getUserRepository().existsByMobileNumber(mobileNumber);
	}

	public Boolean existsByEmailOrMobileNumber(String email, String mobileNumber) {
		return getUserRepository().existsByEmailOrMobileNumber(email, mobileNumber);
	}

	public Boolean existsByEmailOrMobileNumber(String emailOrMobileNumber) {
		return existsByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);
	}

	public User findByEmail(String email) {
		return getUserRepository().findByEmail(email);
	}

	public User findByMobileNumber(String mobileNumber) {
		return getUserRepository().findByMobileNumber(mobileNumber);
	}

	public User findByEmailOrMobileNumber(String email, String mobileNumber) {

		return getUserRepository().findByEmailOrMobileNumber(email, mobileNumber);
	}

	public User findByEmailOrMobileNumber(String emailOrMobileNumber) {
		return findByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);
	}

	public User findById(Long userId) {
		Object entity = getUserRepository().findById(userId).orElse(null);
		if(entity!=null)
			return (User)entity;
		return null;
	}

	public void save(User user, String referralCode) {
		long startTime = System.nanoTime();
		save(user);

		referralService.generateReferralCode();

		referralService.useReferralcode(user, referralCode);

	}
	
	public void save(User user) {
		logger.info("i am in base class save method");
	}

	public User getCurrentUser() {
		return userDetailsServiceImpl.loadUserFromContext();
	}

	public ResponseEntity<?> verifyUserForLogin(String emailOrMobileNumber, String jwt) {
		User user = findByEmailOrMobileNumber(emailOrMobileNumber);

		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {

				if (user.getIsBlocked() != null && !user.getIsBlocked()) {

					UserProfile userProfile = new UserProfile();
					userProfile.setUser(user);
					userProfile.setJwtAuthenticationResponse(new JwtResponse(jwt));

					return ResponseEntity.ok(new ApiResponse(EApiResponseType.SUCCESS,
							messageService.getMessage(EMessage.SIGNIN_SUCCESS), userProfile));
				} else {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNIN_ACCOUNT_BLOCKED)));
				}

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNIN_EMAIL_NOTVERIFIED)));
			}
		} else {
			// TODO: Why only mobile; May change to general message
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_MOBILE_NOTFOUND)));
		}
	}

	public ResponseEntity<?> addUserRole(User user, String roleName) {
		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {
				if (user.getIsBlocked() != null && !user.getIsBlocked()) {

					user.getRoles().clear();

					user.getRoles().add(roleService.getRole(roleName));

					getUserRepository().save(user);

					return ResponseEntity.ok(new ApiResponse(EApiResponseType.SUCCESS,
							messageService.getMessage(EMessage.ROLE_UPDATE_SUCCESS)));
				} else {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNIN_ACCOUNT_BLOCKED)));
				}

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNIN_EMAIL_NOTVERIFIED)));
			}
		} else {
			return ResponseEntity.badRequest()
					.body(new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.USER_NOT_FOUND)));
		}
	}

	public ResponseEntity<?> doFirstLogin(User user, String jwt) {

		if (user != null) {

			UserProfile userProfile = new UserProfile();
			userProfile.setUser(user);
			//TODO: Fetch user detail and set if required.
			userProfile.setJwtAuthenticationResponse(new JwtResponse(jwt));

			return ResponseEntity.ok(new ApiResponse(EApiResponseType.SUCCESS,
					messageService.getMessage(EMessage.SIGNUP_USER_SUCCESS), userProfile));

		} else {
			// TODO: Why only mobile message. Change to general message?
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_MOBILE_NOTFOUND)));
		}
	}
	
	public abstract UserRepository getUserRepository();
	
	public abstract User getNewEntity(String userId);
	
	public abstract User getNewEntity(String userId, String password);

}
