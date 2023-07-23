package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.User;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;

@Service
public class UserService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;
	
	

	public Boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}

	public Boolean existsByPhone(String phone) {
		return userRepository.existsByPhone(phone);
	}

	public Boolean existsByEmailOrPhone(String email, String phone) {
		return existsByEmail(email) || existsByPhone(phone);
	}

	public User findByEmailOrPhone(String email, String phone) {

		User user = userRepository.findByEmail(email);

		if (user == null)
			user = userRepository.findByPhone(phone);

		return user;
	}
	
	public User findByEmailOrPhone(String emailOrPhone) {

		User user = userRepository.findByEmail(emailOrPhone);

		if (user == null)
			user = userRepository.findByPhone(emailOrPhone);

		return user;
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

}
