package com.narenkg.hecko.models.base;

import java.util.List;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.enums.EAddressType;

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
public class Address extends UserDateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
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
