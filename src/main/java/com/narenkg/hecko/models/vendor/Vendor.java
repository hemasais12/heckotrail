package com.narenkg.hecko.models.vendor;

import java.util.HashSet;
import java.util.Set;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.common.Role;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Vendor", uniqueConstraints = { @UniqueConstraint(columnNames = "email"),
		@UniqueConstraint(columnNames = "mobileNumber") })

public class Vendor extends User {
	
	public Vendor() {
		super();
	}
	
	public Vendor(String mobileNumber) {
		super(mobileNumber);
	}

	public Vendor(String email, String password) {
		super(email, password);
	}
	
	@Override
	public Boolean isVendor() {
		return true;
	}
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "vendorRoles", joinColumns = @JoinColumn(name = "vendorId"), inverseJoinColumns = @JoinColumn(name = "roleId"))
	private Set<Role> roles = new HashSet<>();
}
