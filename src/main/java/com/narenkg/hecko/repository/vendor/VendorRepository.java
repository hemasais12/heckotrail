package com.narenkg.hecko.repository.vendor;

import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.repository.UserRepository;

@Repository
public interface VendorRepository extends UserRepository<Vendor> {

}
