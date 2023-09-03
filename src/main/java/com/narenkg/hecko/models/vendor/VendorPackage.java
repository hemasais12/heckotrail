package com.narenkg.hecko.models.vendor;

import java.util.List;

import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorPackage extends UserDateAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private Vendor vendor;
	
	private String packageName;

	private String packageShortName;
	
	@OneToMany
	private List<VendorTask> taskList;
	
	private Boolean isDiscountinued;
	
	private Boolean isAvailable;
	
	private Boolean isPickDropAvailable;

	private Boolean isAvailableAtHome;

}
