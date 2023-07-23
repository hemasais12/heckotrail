package com.narenkg.hecko.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.ServiceCategory;
import com.narenkg.hecko.models.ServiceGroup;
import com.narenkg.hecko.repository.ServiceCategoryRepository;
import com.narenkg.hecko.repository.ServiceGroupRepository;

@Service
public class ServiceGroupService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ServiceGroupRepository serviceGroupRepository;

	public List<ServiceGroup> getAllActiveServiceGroups() {
		return serviceGroupRepository.findByIsActive(true);
	}

	public ServiceGroup getServiceGroup(ServiceCategory serviceCategory, String name, Boolean isActive) {
		return serviceGroupRepository.findByServiceCategoryAndNameAndIsActive(serviceCategory, name, isActive);
	}

}
