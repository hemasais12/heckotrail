package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.User;
import com.narenkg.hecko.repository.UserRepository;

@Service
public class UserService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;

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

	public Object save(User user) {
		return userRepository.save(user);
	}

}
