package com.narenkg.hecko.services;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.TaskCategory;
import com.narenkg.hecko.models.TaskSubCategory;
import com.narenkg.hecko.repository.TaskCategoryRepository;
import com.narenkg.hecko.repository.TaskSubCategoryRepository;

@Service
public class TaskSubCategoryService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private TaskSubCategoryRepository taskSubCategoryRepository;

	public List<TaskSubCategory> getAllActiveTaskSubCategories() {
		return taskSubCategoryRepository.findByIsActive(true);
	}

	public TaskSubCategory getTaskSubCategory(TaskCategory taskCategory, String name, Boolean isActive) {
		return taskSubCategoryRepository.findByTaskCategoryAndNameAndIsActive(taskCategory, name, isActive);
	}

}
