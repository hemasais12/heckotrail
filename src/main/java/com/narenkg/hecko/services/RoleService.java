package com.narenkg.hecko.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.repository.RoleRepository;

@Service
public class RoleService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private RoleRepository roleRepository;

	public Role getClientRole() {
		return roleRepository.findByName(ERole.ROLE_CLIENT);
	}

	public Role getVendorRole() {
		return roleRepository.findByName(ERole.ROLE_VENDOR);
	}

	public Role getRole(String role) {
		return roleRepository
				.findByName(ERole.ROLE_VENDOR.name().equalsIgnoreCase(role) ? ERole.ROLE_VENDOR : ERole.ROLE_CLIENT);
	}

	public boolean hasVendorRole(User user) {
		for (Role role : user.getRoles()) {
			if (role.getName() == ERole.ROLE_VENDOR)
				return true;
		}
		return false;
	}

	public boolean hasClientRole(User user) {
		for (Role role : user.getRoles()) {
			if (role.getName() == ERole.ROLE_CLIENT)
				return true;
		}
		return false;
	}

}
