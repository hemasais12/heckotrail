package com.narenkg.hecko.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorServiceUpdateRequest {
	private Long serviceId;
	
	private Double vendorPrice;

	private Long currencyId;

	private Boolean isAvailable;

	private Boolean isDiscontinued;
}
