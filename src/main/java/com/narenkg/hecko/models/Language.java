package com.narenkg.hecko.models;

import com.narenkg.hecko.models.audit.DateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Language extends DateAudit{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 80)
	private String country;

	@NotBlank
	@Size(max = 80)
	private String state;
	
	@NotBlank
	@Size(max = 80)
	private String city;

	@NotBlank
	@Size(max = 80)
	private String language;

}
