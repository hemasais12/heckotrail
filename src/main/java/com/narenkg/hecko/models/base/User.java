package com.narenkg.hecko.models.base;

import java.util.Set;

import com.narenkg.hecko.models.audit.DateAudit;
import com.narenkg.hecko.models.common.Role;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class User extends DateAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;

	@Size(max = 50)
	private String email;

	@Size(max = 15)
	private String mobileNumber;

	private Boolean isVerified;

	private Boolean isBlocked;

	@Size(max = 120)
	private String password;

	@Size(max = 120)
	private String mobilePassword;

	public User(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public User(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public Boolean isVendor() {
		return false;
	}
	
	public  Set<Role> getRoles() {return null;}

}
