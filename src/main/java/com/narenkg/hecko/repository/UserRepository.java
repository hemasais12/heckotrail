package com.narenkg.hecko.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findById(Long id);

	User findByEmail(String email);

	User findByPhone(String phone);
	
	User findByEmailOrPhone(String email, String phone);

	Boolean existsByEmail(String email);

	Boolean existsByPhone(String phone);
	
	Boolean existsByEmailOrPhone(String email, String phone);
}
