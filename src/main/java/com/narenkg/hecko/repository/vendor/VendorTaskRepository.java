package com.narenkg.hecko.repository.vendor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.models.vendor.VendorTask;

@Repository
public interface VendorTaskRepository extends JpaRepository<VendorTask, Long> {

	VendorTask findByTaskAndVendor(Task service, Vendor vendor);
}
