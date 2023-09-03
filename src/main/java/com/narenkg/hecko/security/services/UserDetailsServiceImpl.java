package com.narenkg.hecko.security.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.client.Client;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.repository.client.ClientRepository;
import com.narenkg.hecko.repository.vendor.VendorRepository;
import com.narenkg.hecko.security.services.client.ClientDetailsImpl;
import com.narenkg.hecko.security.services.vendor.VendorDetailsImpl;
import com.narenkg.hecko.util.GeneralUtil;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private VendorRepository vendorRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		if (username == null || username.trim().isBlank())
			throw new UsernameNotFoundException("User id cannot be blank");

		String userType = GeneralUtil.getUsernameType(username);
		String emailOrMobileNumber = GeneralUtil.getUsername(username);

		if (username == null || username.trim().isBlank())
			throw new UsernameNotFoundException("User id cannot be blank");

		User user = null;
		if (IConstants.APP_CLIENT_PREFIX.equalsIgnoreCase(userType))
			user = clientRepository.findByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);
		else if (IConstants.APP_VENDOR_PREFIX.equalsIgnoreCase(userType))
			user = vendorRepository.findByEmailOrMobileNumber(emailOrMobileNumber, emailOrMobileNumber);

		if (user == null)
			throw new UsernameNotFoundException("User Not Found with id: " + emailOrMobileNumber);

		if (IConstants.APP_CLIENT_PREFIX.equalsIgnoreCase(userType)) {
			if (GeneralUtil.isEmail(emailOrMobileNumber)) {
				return ClientDetailsImpl.buildForEmailUser((Client)user);
			} else {
				return ClientDetailsImpl.buildForMobileUser((Client)user);
			}
		} else if (IConstants.APP_VENDOR_PREFIX.equalsIgnoreCase(userType)) {
			if (GeneralUtil.isEmail(emailOrMobileNumber)) {
				return VendorDetailsImpl.buildForEmailUser((Vendor)user);
			} else {
				return VendorDetailsImpl.buildForMobileUser((Vendor)user);
			}
		}
		return null;
	}

	public User loadUserFromContext() {
		
		Object entity = null;

		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		if(authentication.getPrincipal() instanceof ClientDetailsImpl) {
			entity = clientRepository.findById(((UserDetailsImpl) authentication.getPrincipal()).getId())
					.orElse(null);
		} else if (authentication.getPrincipal() instanceof VendorDetailsImpl) {
			entity = vendorRepository.findById(((UserDetailsImpl) authentication.getPrincipal()).getId())
					.orElse(null);
		}

		return (User) entity;
	}
}
