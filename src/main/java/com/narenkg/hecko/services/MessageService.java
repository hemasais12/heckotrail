package com.narenkg.hecko.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.repository.MessageRepository;

public class MessageService {
private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private MessageRepository messageRepository;
	
	private HashMap<String, Message> mapAllMessages = new HashMap<String, Message>();
	
	public void init() {
		if (mapAllMessages == null) {
			List<Message> allMessages = messageRepository.findAll();
			for(Message message: allMessages) {
				mapAllMessages.put(message.getMessageKey(), message);
			}
			logger.info("Categories loaded: " + allMessages.size());
		}
	}
	
	public Message getMessage(String messageKey) {
		init();
		return mapAllMessages.get(messageKey);
	}
	
}
