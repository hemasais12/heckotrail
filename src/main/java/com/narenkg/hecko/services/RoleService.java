package com.narenkg.hecko.services;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.repository.RoleRepository;

@Service
public class RoleService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private RoleRepository roleRepository;

	public Set<Role> getVendorRoles() {
		return Collections.singleton(roleRepository.findByName(ERole.ROLE_VENDOR));
	}

	public Set<Role> getUserRoles() {
		return Collections.singleton(roleRepository.findByName(ERole.ROLE_USER));
	}

	public Set<Role> getAdminRoles() {
		return Collections.singleton(roleRepository.findByName(ERole.ROLE_ADMIN));
	}

	public List<Role> getRolesExceptAdmin(List<Long> roleIds) {

		List<Role> roles = roleRepository.findByIdIn(roleIds);

		// roles.removeIf(role ->
		// role.getName().name().equalsIgnoreCase(ERole.ROLE_ADMIN.name()));
		List<Role> filteredCollection = roles.stream()
				.filter(role -> !role.getName().name().equalsIgnoreCase(ERole.ROLE_ADMIN.name()))
				.collect(Collectors.toCollection(ArrayList::new));
		return filteredCollection;

	}

}
