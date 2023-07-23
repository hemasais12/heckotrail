package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.ServiceCategory;

@Repository
public interface ServiceCategoryRepository extends JpaRepository<ServiceCategory, Long> {
	List<ServiceCategory> findByIsActive(Boolean isActive);
	
	ServiceCategory findByIdentifierAndIsActive(String identifier, Boolean isActive);
}
