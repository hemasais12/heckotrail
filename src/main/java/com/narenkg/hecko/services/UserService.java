package com.narenkg.hecko.services;

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

	public Boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}

	public Boolean existsByPhone(String phone) {
		return userRepository.existsByPhone(phone);
	}

	public Boolean existsByEmailOrPhone(String email, String phone) {
		return userRepository.existsByEmailOrPhone(email, phone);
	}

	public Boolean existsByEmailOrPhone(String emailOrPhone) {
		return existsByEmailOrPhone(emailOrPhone, emailOrPhone);
	}
	
	public User findByEmail(String email) {

		User user = userRepository.findByEmail(email);
		return user;
	}
	
	public User findByPhone(String phone) {

		User user = userRepository.findByPhone(phone);
		return user;
	}

	public User findByEmailOrPhone(String email, String phone) {

		User user = userRepository.findByEmailOrPhone(email, phone);
		return user;
	}

	public User findByEmailOrPhone(String emailOrPhone) {
		return findByEmailOrPhone(emailOrPhone, emailOrPhone);
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

	public ResponseEntity<?> verifyUserForLogin(String username, String jwt) {
		User user = findByEmailOrPhone(username);

		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {

				if (user.getIsBlocked() != null && !user.getIsBlocked()) {

					UserProfile userProfile = new UserProfile();
					userProfile.setEmail(user.getEmail());
					userProfile.setPhone(user.getPhone());
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

	public ResponseEntity<?> doFirstLogin(User user, String jwt) {

		if (user != null) {

			UserProfile userProfile = new UserProfile();
			userProfile.setEmail(user.getEmail());
			userProfile.setPhone(user.getPhone());
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
