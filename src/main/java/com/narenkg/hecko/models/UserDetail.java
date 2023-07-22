package com.narenkg.hecko.models;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.enums.EGender;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
public class UserDetail extends UserDateAudit  {

	@NotBlank
	@Size(max = 120)
	private String fullName;
	
	private EGender gender;
	
	@OneToMany
    private Set<UserLanguage> languages;
}
