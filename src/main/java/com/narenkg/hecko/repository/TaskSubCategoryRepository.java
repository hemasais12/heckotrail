package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.TaskCategory;
import com.narenkg.hecko.models.TaskSubCategory;

@Repository
public interface TaskSubCategoryRepository extends JpaRepository<TaskSubCategory, Long> {
	List<TaskSubCategory> findByIsActive(Boolean isActive);
	
	TaskSubCategory findByTaskCategoryAndNameAndIsActive(TaskCategory taskCategory, String name, Boolean isActive);
}
