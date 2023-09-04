package com.narenkg.hecko.models.client;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.common.Role;
import com.narenkg.hecko.models.enums.ERole;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Client", uniqueConstraints = { @UniqueConstraint(columnNames = "email"),
		@UniqueConstraint(columnNames = "mobileNumber") })

public class Client extends User {
	
	public Client() {
		super();
	}
	
	public Client(String mobileNumber) {
		super(mobileNumber);
	}

	public Client(String email, String password) {
		super(email, password);
	}
	
	@Override
	public Boolean isVendor() {
		return false;
	}
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "clientRoles", joinColumns = @JoinColumn(name = "clientId"), inverseJoinColumns = @JoinColumn(name = "roleId"))
	private Set<Role> roles = new HashSet<>();
}
