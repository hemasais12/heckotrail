package com.narenkg.hecko.models;

import java.util.List;

import com.narenkg.hecko.models.audit.DateAudit;
import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.enums.EAddressType;

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

public class Address extends UserDateAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 20)
	private String addressName;

	private EAddressType addressType;

	private List<String> contactNumbers;
	
	@NotBlank
	@Size(max = 80)
	private String addressLine1;

	@NotBlank
	@Size(max = 80)
	private String addressLine2;
	
	@NotBlank
	@Size(max = 80)
	private String city;
	
	@NotBlank
	@Size(max = 80)
	private String state;
	
	@NotBlank
	@Size(max = 80)
	private String country;
	
	@NotBlank
	@Size(max = 10)
	private String pinCode;
}
