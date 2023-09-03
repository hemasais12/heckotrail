package com.narenkg.hecko.services.vendor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.models.Task;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.models.vendor.VendorTask;
import com.narenkg.hecko.payload.request.VendorServiceUpdateRequest;
import com.narenkg.hecko.repository.vendor.VendorTaskRepository;
import com.narenkg.hecko.services.CurrencyService;
import com.narenkg.hecko.services.TaskService;

@org.springframework.stereotype.Service
public class VendorTaskService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private TaskService taskService;

	@Autowired
	private VendorService vendorService;

	@Autowired
	private CurrencyService currencyService;

	@Autowired
	private VendorTaskRepository vendorTaskRepository;

	public EMessage updateVendorService(VendorServiceUpdateRequest vendorServiceUpdateRequest) {

		Task task = taskService.getTask(vendorServiceUpdateRequest.getServiceId());

		Vendor vendor = vendorService.getCurrentVendor();

		VendorTask vendorTask = vendorTaskRepository.findByTaskAndVendor(task, vendor);

		if (vendorTask == null) {
			vendorTask = new VendorTask();
			vendorTask.setTask(task);
			vendorTask.setVendor(vendor);
		}

		if (vendorTask.getVendor().getId().equals(vendor.getId())) {
			vendorTask.setVendorPrice(vendorServiceUpdateRequest.getVendorPrice());
			vendorTask.setIsAvailable(vendorServiceUpdateRequest.getIsAvailable());
			vendorTask.setIsDiscontinued(vendorServiceUpdateRequest.getIsDiscontinued());
			vendorTask.setCurrency(currencyService.get(vendorServiceUpdateRequest.getCurrencyId()));

			vendorTaskRepository.save(vendorTask);

			return EMessage.VENDOR_UPDATE_SERVICE_SUCCESS;
		}
		return EMessage.VENDOR_UPDATE_SERVICE_FAILED;
	}

}
