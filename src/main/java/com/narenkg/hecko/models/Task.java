package com.narenkg.hecko.models;

import java.util.HashSet;
import java.util.Set;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.vendor.Vendor;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
public class Task extends UserDateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 120)
	private String name;

	@Size(max = 120)
	private String shortName;

	@NotBlank
	@Size(max = 120)
	private String identifier;

	private Boolean isActive;

	@ManyToOne
	private TaskSubCategory taskSubCategory;

	private Boolean isPickDropEligible;

	private Boolean isAvailableAtHome;
	
	private Task parentTask;
	
	private Vendor addedBy; //if null, then available to all 
}
