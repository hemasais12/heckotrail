package com.narenkg.hecko.models.base;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.enums.EGender;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class UserDetail extends UserDateAudit  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@NotBlank
	@Size(max = 120)
	private String fullName;
	
	private EGender gender;
	
}
