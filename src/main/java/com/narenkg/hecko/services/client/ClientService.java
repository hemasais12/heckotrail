package com.narenkg.hecko.services.client;

import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.client.Client;
import com.narenkg.hecko.repository.client.ClientRepository;
import com.narenkg.hecko.services.RoleService;
import com.narenkg.hecko.services.UserService;

@Service
public class ClientService extends UserService{
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ClientRepository clientRepository;
	
	@Autowired
	private RoleService roleService;
	
	
	public ClientRepository getUserRepository() {
		return clientRepository;
	}

	
	public Client getCurrentClient() {
		return (Client)getCurrentUser();
	}
	
	
	@Override
	public void save(User client) {
		logger.info("i am in client class save method");
		clientRepository.save((Client)client);
	}
	
	public Client getNewEntity(String userId) {
		return new Client(userId);
	}
	
	public Client getNewEntity(String userId, String password) {
		return new Client(userId, password);
	}
	
	public void setDefaultRole(User client) {
		client.setRoles(Collections.singleton(roleService.getClientRole()));
	}
	
	

}
