package com.narenkg.hecko.models;

import java.util.Date;

import com.narenkg.hecko.models.audit.DateAudit;
import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
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
public class Product extends UserDateAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 120)
	private String brand; // Brand Name
	
	@ManyToOne
	private Category productCategory; // Car, Bike etc
	
	@ManyToOne
	private Category productType; // Oil, wire, indicators
	
	@NotBlank
	@Size(max = 120)
	private String code; // product code
	
	@NotBlank
	@Size(max = 120)
	private String version; // 2x, 3x etc
	
	@NotBlank
	@Size(max = 120)
	private String identifier; //unique identifier
	
	@NotBlank
	@Size(max = 120)
	private String detail; // description
	
	private Double mrp; // MRP
	
	private Date releaseDate; // product release date
	
	@ManyToOne
	private Currency currency; // INR, $ etc
	
	private Boolean isActive;
	
	private Long duplicateOf;
}