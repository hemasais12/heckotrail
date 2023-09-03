package com.narenkg.hecko.models.vendor;

import com.narenkg.hecko.models.Product;
import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.common.Currency;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class VendorProduct extends UserDateAudit {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@OneToOne
	private Vendor vendor;
	
	@OneToOne
	private Product product;

	private Double vendorPrice; 
	
	private Double vendorDiscountedPrice; 
	
	@OneToOne
	private Currency currency; 
	
	private Boolean isAvailable;
	
	private Boolean isDiscontinued;
	
	private Boolean isHomeDeliveryAvailable;
}
