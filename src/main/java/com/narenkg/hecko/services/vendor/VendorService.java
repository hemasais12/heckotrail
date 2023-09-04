package com.narenkg.hecko.services.vendor;

import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.repository.vendor.VendorRepository;
import com.narenkg.hecko.services.RoleService;
import com.narenkg.hecko.services.UserService;

@Service
public class VendorService extends UserService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private VendorRepository vendorRepository;
	
	@Autowired
	private RoleService roleService;

	public VendorRepository getUserRepository() {
		return vendorRepository;
	}
	
	public Vendor getCurrentVendor() {
		return (Vendor)getCurrentUser();
	}
	
	@Override
	public void save(User vendor) {
		logger.info("i am in vendor class save method");
		vendorRepository.save((Vendor)vendor);
	}

	public Vendor getNewEntity(String userId) {
		return new Vendor(userId);
	}
	
	public Vendor getNewEntity(String userId, String password) {
		return new Vendor(userId, password);
	}
	
	public void setDefaultRole(User vendor) {
		((Vendor)vendor).setRoles(Collections.singleton(roleService.getVendorRole()));
	}
}
