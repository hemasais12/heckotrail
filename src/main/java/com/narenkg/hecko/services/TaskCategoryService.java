package com.narenkg.hecko.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.TaskCategory;
import com.narenkg.hecko.repository.TaskCategoryRepository;

@Service
public class TaskCategoryService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private TaskCategoryRepository taskCategoryRepository;

	public List<TaskCategory> getAllActiveTaskCategories() {
		return taskCategoryRepository.findByIsActive(true);
	}

	public TaskCategory getTaskCategory(String identifier, Boolean isActive) {
		return taskCategoryRepository.findByIdentifierAndIsActive(identifier, isActive);
	}

}
