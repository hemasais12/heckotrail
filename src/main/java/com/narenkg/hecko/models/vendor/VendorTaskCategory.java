package com.narenkg.hecko.models.vendor;

import com.narenkg.hecko.models.TaskCategory;
import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class VendorTaskCategory extends UserDateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	private Vendor vendor;

	@OneToOne
	private TaskCategory taskCategory;

	private Boolean isAvailable;

	private Boolean isDiscontinued;

	private Boolean isPickDropAvailable;

	private Boolean isAvailableAtHome;
}
