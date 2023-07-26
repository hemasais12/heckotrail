package com.narenkg.hecko.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findById(Long id);

	User findByEmail(String email);

	User findByMobileNumber(String mobileNumber);
	
	User findByEmailOrMobileNumber(String email, String mobileNumber);

	Boolean existsByEmail(String email);

	Boolean existsByMobileNumber(String mobileNumber);
	
	Boolean existsByEmailOrMobileNumber(String email, String mobileNumber);
}
