package com.narenkg.hecko.services;

import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.common.ReferralCode;
import com.narenkg.hecko.models.common.Referrals;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.ReferralCodeRepository;
import com.narenkg.hecko.repository.ReferralsRepository;
import com.narenkg.hecko.repository.vendor.VendorRepository;
import com.narenkg.hecko.util.GeneralUtil;

@Service
public class ReferralService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private VendorRepository userRepository;

	@Autowired
	private ReferralCodeRepository referralCodeRepository;

	@Autowired
	private ReferralsRepository referralsRepository;

	@Autowired
	private MessageService messageService;

	@Async
	public void generateReferralCode() {
		
		long startTime = System.nanoTime();
		logger.info("generateReferralCode");

		ReferralCode referralCode = new ReferralCode();

		boolean codeFound = false;

		String code = null;
		while (!codeFound) {
			code = GeneralUtil.createAlphaNumbericRandomCode(IConstants.REFERRAL_CODE_LENGTH);
			ReferralCode referralCode1 = referralCodeRepository.findByCode(code);
			if (referralCode1 == null)
				codeFound = true;
		}
		referralCode.setCode(code);
		referralCodeRepository.save(referralCode);
		
		System.out.println("*****************generateReferralCode *******Elapsed Time in mili seconds: "
				+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));

	}

	public ResponseEntity<?> verifyReferralCode(String strReferralCode) {

		ReferralCode referralCode = referralCodeRepository.findByCode(strReferralCode);

		if (referralCode != null) {
			return ResponseEntity
					.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));
		} else {
			return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
					messageService.getMessage(EMessage.REFFERAL_CODE_INCORRECT)));
		}

	}

	@Async
	public void useReferralcode(User user, String strReferralCode) {
		long startTime = System.nanoTime();
		if (strReferralCode != null && !strReferralCode.trim().isBlank()) {
			Referrals referrals = new Referrals();
			referrals.setUsedBy(user.getId());
			referrals.setIsVendor(user.isVendor());
			referrals.setReferralStrCode(strReferralCode);
			referralsRepository.save(referrals);
			
		}
		System.out.println("*****************useReferralcode *******Elapsed Time in mili seconds: "
				+ TimeUnit.NANOSECONDS.toMillis((System.nanoTime() - startTime)));
	}

}
