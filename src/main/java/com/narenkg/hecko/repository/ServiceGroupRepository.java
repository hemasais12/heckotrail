package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.ServiceCategory;
import com.narenkg.hecko.models.ServiceGroup;

@Repository
public interface ServiceGroupRepository extends JpaRepository<ServiceGroup, Long> {
	List<ServiceGroup> findByIsActive(Boolean isActive);
	
	ServiceGroup findByServiceCategoryAndNameAndIsActive(ServiceCategory serviceCategory, String name, Boolean isActive);
}
