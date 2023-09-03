package com.narenkg.hecko.models.vendor;

import java.util.List;

import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.common.Currency;

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
public class VendorTask extends UserDateAudit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	private Vendor vendor;

	@OneToOne
	private Task task;

	@OneToMany
	private List<VendorProduct> taskProducts;

	private Double vendorPrice;

	private Double vendorDiscountedPrice;

	@OneToOne
	private Currency currency;

	private Boolean isAvailable;

	private Boolean isDiscontinued;

	private Boolean isPickDropAvailable;

	private Boolean isAvailableAtHome;

}
