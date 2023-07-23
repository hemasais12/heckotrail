package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.narenkg.hecko.constants.EMessage;
import com.narenkg.hecko.models.Service;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.models.VendorService;
import com.narenkg.hecko.payload.request.VendorServiceUpdateRequest;
import com.narenkg.hecko.repository.VendorServiceRepository;

@org.springframework.stereotype.Service
public class VendorServiceService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ServiceService serviceService;

	@Autowired
	private UserService userService;

	@Autowired
	private CurrencyService currencyService;

	@Autowired
	private VendorServiceRepository vendorServiceRepository;

	public EMessage updateVendorService(VendorServiceUpdateRequest vendorServiceUpdateRequest) {

		Service service = serviceService.getService(vendorServiceUpdateRequest.getServiceId());

		User user = userService.getCurrentUser();

		VendorService vendorService = vendorServiceRepository.findByServiceAndUser(service, user);

		if (vendorService == null) {
			vendorService = new VendorService();
			vendorService.setService(service);
			vendorService.setUser(user);
		}

		if (vendorService.getUser().getId().equals(user.getId())) {
			vendorService.setVendorPrice(vendorServiceUpdateRequest.getVendorPrice());
			vendorService.setIsAvailable(vendorServiceUpdateRequest.getIsAvailable());
			vendorService.setIsDiscontinued(vendorServiceUpdateRequest.getIsDiscontinued());
			vendorService.setCurrency(currencyService.get(vendorServiceUpdateRequest.getCurrencyId()));

			vendorServiceRepository.save(vendorService);

			return EMessage.VENDOR_UPDATE_SERVICE_SUCCESS;
		}
		return EMessage.VENDOR_UPDATE_SERVICE_FAILED;
	}

}
