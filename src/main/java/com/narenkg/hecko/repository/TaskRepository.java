package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.models.TaskCategory;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
	List<Task> findByIsActive(Boolean isActive);
	
	Task findByIdAndIsActive(Long id, Boolean isActive);
}
