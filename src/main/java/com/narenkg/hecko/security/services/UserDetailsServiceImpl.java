package com.narenkg.hecko.security.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.narenkg.hecko.models.User;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.services.UserService;
import com.narenkg.hecko.util.GeneralUtil;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		logger.info("loadUserByUsername:username: ------------------------> " + username);

		User user = userRepository.findByEmailOrPhone(username, username);

		if (user == null)
			throw new UsernameNotFoundException("User Not Found with username: " + username);

		if (GeneralUtil.isEmail(username)) {
			return UserDetailsImpl.build(user);
		} else {
			return UserDetailsImpl.buildForMobileLogin(user);
		}

	}

	public User loadUserFromContext() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		return userRepository.findById(((UserDetailsImpl) authentication.getPrincipal()).getId()).orElse(null);
	}

}
