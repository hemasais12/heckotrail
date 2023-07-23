package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Service;
import com.narenkg.hecko.models.ServiceCategory;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
	List<Service> findByIsActive(Boolean isActive);
	
	Service findByIdAndIsActive(Long id, Boolean isActive);
}
