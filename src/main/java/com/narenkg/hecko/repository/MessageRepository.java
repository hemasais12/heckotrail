package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.common.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

}
