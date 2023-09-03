package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.TaskCategory;

@Repository
public interface TaskCategoryRepository extends JpaRepository<TaskCategory, Long> {
	List<TaskCategory> findByIsActive(Boolean isActive);
	
	TaskCategory findByIdentifierAndIsActive(String identifier, Boolean isActive);
}
