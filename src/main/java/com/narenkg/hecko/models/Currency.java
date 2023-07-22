package com.narenkg.hecko.models;

import com.narenkg.hecko.models.audit.UserDateAudit;

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
public class Currency extends UserDateAudit {
	
	@NotBlank
	@Size(max = 80)
	private String country;

	@NotBlank
	@Size(max = 5)
	private String symbol;
	
	@NotBlank
	@Size(max = 80)
	private String shortName;
	
	@NotBlank
	@Size(max = 80)
	private String longName;

}
