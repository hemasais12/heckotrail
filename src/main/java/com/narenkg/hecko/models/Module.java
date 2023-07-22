package com.narenkg.hecko.models;

import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.Entity;
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
public class Module extends UserDateAudit  {
	@NotBlank
	@Size(max = 120)
	private String name;
	
	@NotBlank
	@Size(max = 120)
	private String subModuleLevel1;
	
	@NotBlank
	@Size(max = 120)
	private String subModuleLevel2;
	
	@NotBlank
	@Size(max = 120)
	private String subModuleLevel3;
	
	@NotBlank
	@Size(max = 120)
	private String subModuleLevel4;
	
	@NotBlank
	@Size(max = 120)
	private String subModuleLevel5;
}
