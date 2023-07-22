package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.models.Message;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.enums.ERole;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}
