package com.narenkg.hecko.services;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.models.common.Message;
import com.narenkg.hecko.repository.MessageRepository;

@Service
public class MessageService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private MessageRepository messageRepository;

	private HashMap<String, Message> mapAllMessages = null;

	private void init() {
		if (mapAllMessages == null) {
			mapAllMessages = new HashMap<String, Message>();
			List<Message> allMessages = messageRepository.findAll();
			for (Message message : allMessages) {
				mapAllMessages.put(message.getMessageKey(), message);
			}
			logger.info("mapAllMessages loaded: " + allMessages.size());
		}
	}

	public Message getMessage(EMessage enumMessage) {
		init();
		return mapAllMessages.get(enumMessage.name());
	}

}
