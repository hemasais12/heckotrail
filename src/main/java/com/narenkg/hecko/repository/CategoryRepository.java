package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.enums.ERole;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
