package com.narenkg.hecko.services;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.UserProfile;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;

@Service
public class UserService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	private MessageService messageService;

	@Autowired
	private RoleService roleService;

	public Boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}

	public Boolean existsByMobileNumber(String mobileNumber) {
		return userRepository.existsByMobileNumber(mobileNumber);
	}

	public Boolean existsByEmailOrMobileNumber(String email, String mobileNumber) {
		return userRepository.existsByEmailOrMobileNumber(email, mobileNumber);
	}

	public Boolean existsByEmailOrMobileNumber(String emailOrMobileNumber) {
		return existsByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);
	}

	public User findByEmail(String email) {

		User user = userRepository.findByEmail(email);
		return user;
	}

	public User findByMobileNumber(String mobileNumber) {

		User user = userRepository.findByMobileNumber(mobileNumber);
		return user;
	}

	public User findByEmailOrMobileNumber(String email, String mobileNumber) {

		User user = userRepository.findByEmailOrMobileNumber(email, mobileNumber);
		return user;
	}

	public User findByEmailOrMobileNumber(String emailOrMobileNumber) {
		return findByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);
	}

	public User findById(Long userId) {
		return userRepository.findById(userId).orElse(null);
	}

	public Object save(User user) {
		return userRepository.save(user);
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
					userProfile.setEmail(user.getEmail());
					userProfile.setMobileNumber(user.getMobileNumber());
					userProfile.setIsVerified(user.getIsVerified());
					userProfile.setIsBlocked(user.getIsBlocked());
					userProfile.setUserDetail(user.getUserDetail());
					userProfile.setRoles(user.getRoles());
					userProfile.setJwtAuthenticationResponse(new JwtResponse(jwt));
					userProfile.setEmail(user.getEmail());

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
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_USER_NOTFOUND)));
		}
	}

	public ResponseEntity<?> updateRoles(User user, List<Long> roles) {
		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {
				if (user.getIsBlocked() != null && !user.getIsBlocked()) {

					user.getRoles().clear();
					user.getRoles().addAll(roleService.getRolesExceptAdmin(roles));
					userRepository.save(user);

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
			userProfile.setEmail(user.getEmail());
			userProfile.setMobileNumber(user.getMobileNumber());
			userProfile.setIsVerified(user.getIsVerified());
			userProfile.setIsBlocked(user.getIsBlocked());
			userProfile.setUserDetail(user.getUserDetail());
			userProfile.setRoles(user.getRoles());
			userProfile.setJwtAuthenticationResponse(new JwtResponse(jwt));

			return ResponseEntity.ok(new ApiResponse(EApiResponseType.SUCCESS,
					messageService.getMessage(EMessage.SIGNUP_USER_SUCCESS), userProfile));

		} else {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_USER_NOTFOUND)));
		}
	}

}
