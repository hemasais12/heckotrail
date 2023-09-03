package com.narenkg.hecko.repository;

import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;
import com.narenkg.hecko.models.base.User;

@NoRepositoryBean
public interface UserRepository<T> extends Repository<T, Long> {
	
	Optional<T> findById(Long id);

	User findByEmail(String email);

	User findByMobileNumber(String mobileNumber);
	
	User findByEmailOrMobileNumber(String email, String mobileNumber);

	Boolean existsByEmail(String email);

	Boolean existsByMobileNumber(String mobileNumber);
	
	Boolean existsByEmailOrMobileNumber(String email, String mobileNumber);
	
	<S extends T> S save(S entity);
    <S extends T> List<S> saveAll(Iterable<S> entities);
}
