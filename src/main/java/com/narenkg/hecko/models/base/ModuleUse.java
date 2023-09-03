package com.narenkg.hecko.models.base;

import java.time.Instant;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.common.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotBlank;
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
public class ModuleUse extends UserDateAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;	
	
	@ManyToOne
	private Module module;

	private Instant lastUsed;
	
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
