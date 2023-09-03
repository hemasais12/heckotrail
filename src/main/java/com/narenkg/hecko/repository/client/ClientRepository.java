package com.narenkg.hecko.repository.client;

import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.client.Client;
import com.narenkg.hecko.repository.UserRepository;

@Repository
public interface ClientRepository extends UserRepository<Client> {

}
