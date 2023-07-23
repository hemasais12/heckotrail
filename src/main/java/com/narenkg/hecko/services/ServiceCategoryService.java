package com.narenkg.hecko.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.ServiceCategory;
import com.narenkg.hecko.repository.ServiceCategoryRepository;

@Service
public class ServiceCategoryService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ServiceCategoryRepository serviceCategoryRepository;

	public List<ServiceCategory> getAllActiveServiceCategories() {
		return serviceCategoryRepository.findByIsActive(true);
	}

	public ServiceCategory getServiceCategory(String identifier, Boolean isActive) {
		return serviceCategoryRepository.findByIdentifierAndIsActive(identifier, isActive);
	}

}
