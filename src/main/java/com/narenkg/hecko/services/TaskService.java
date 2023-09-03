package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.repository.TaskRepository;

@org.springframework.stereotype.Service
public class TaskService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private TaskRepository taskRepository;

	public Task getTask(Long taskId) {
		return taskRepository.findByIdAndIsActive(taskId, true);
	}

}
