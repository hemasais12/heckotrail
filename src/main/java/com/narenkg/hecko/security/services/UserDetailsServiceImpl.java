package com.narenkg.hecko.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.narenkg.hecko.models.User;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.services.UserService;
import com.narenkg.hecko.util.EmailUtil;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	private UserService userService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userService.findByEmailOrPhone(username, username);

		if (user == null)
			throw new UsernameNotFoundException("User Not Found with username: " + username);

		return UserDetailsImpl.build(user);
	}

}
