package com.narenkg.hecko.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Service;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.models.VendorService;

@Repository
public interface VendorServiceRepository extends JpaRepository<VendorService, Long> {

	VendorService findByServiceAndUser(Service service, User user);
}
