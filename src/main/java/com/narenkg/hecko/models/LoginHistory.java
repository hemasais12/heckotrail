package com.narenkg.hecko.models;

import java.time.Instant;

import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginHistory extends UserDateAudit {
	private User user;

	private Instant lastLogin;
	
	@NotBlank
	@Size(max = 120)
	private String deviceName;
	
	@NotBlank
	@Size(max = 120)
	private String deviceType;
	
	@NotBlank
	@Size(max = 20)
	private String ipAddress;
	
	@Lob
	private String locationDetails;
}
