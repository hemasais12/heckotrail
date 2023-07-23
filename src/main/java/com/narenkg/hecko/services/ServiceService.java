package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.narenkg.hecko.models.Service;
import com.narenkg.hecko.repository.ServiceRepository;

@org.springframework.stereotype.Service
public class ServiceService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ServiceRepository serviceRepository;

	public Service getService(Long serviceId) {
		return serviceRepository.findByIdAndIsActive(serviceId, true);
	}

}
