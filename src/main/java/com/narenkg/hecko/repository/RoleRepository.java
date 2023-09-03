package com.narenkg.hecko.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.common.Role;
import com.narenkg.hecko.models.enums.ERole;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByName(ERole name);

	List<Role> findByIdIn(List<Long> roleIds);
	
	Role getById(Long roleId);

}
