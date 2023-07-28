package com.narenkg.hecko.services;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.consts.EMessage;
import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.models.ReferralCode;
import com.narenkg.hecko.models.Referrals;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.payload.response.ApiResponse;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.UserProfile;
import com.narenkg.hecko.payload.response.enums.EApiResponseType;
import com.narenkg.hecko.repository.ReferralCodeRepository;
import com.narenkg.hecko.repository.ReferralsRepository;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;
import com.narenkg.hecko.util.GeneralUtil;

@Service
public class ReferralService {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ReferralCodeRepository referralCodeRepository;

	@Autowired
	private ReferralsRepository referralsRepository;

	@Autowired
	private MessageService messageService;

	public ResponseEntity<?> generateReferralCode(User user) {

		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {

				if (user.getIsBlocked() != null && !user.getIsBlocked()) {

					ReferralCode referralCode = new ReferralCode();

					referralCode.setUser(user);

					boolean codeFound = false;

					String code = null;
					while (!codeFound) {
						code = GeneralUtil.createAlphaNumbericRandomCode(IConstants.REFERRAL_CODE_LENGTH);
						// changed by hemasai
						ReferralCode referralCode1 = referralCodeRepository.findByCode(code);
						if (referralCode1 == null)
							// upto this
							codeFound = true;
					}
					referralCode.setCode(code);
					referralCodeRepository.save(referralCode);

					return ResponseEntity.ok(
							new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));
				} else {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNIN_ACCOUNT_BLOCKED)));
				}

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNIN_EMAIL_NOTVERIFIED)));
			}
		} else {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_USER_NOTFOUND)));
		}
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

	public ResponseEntity<?> registerSignupViaReferral(User user, String strReferralCode) {

		if (user != null) {
			if (user.getIsVerified() != null && user.getIsVerified()) {

				if (user.getIsBlocked() != null && !user.getIsBlocked()) {
					Referrals referrals = new Referrals();
					referrals.setUsedBy(user);
					referrals.setUsedReferralCode(strReferralCode);
					referralsRepository.save(referrals);
					return ResponseEntity
							.ok(new ApiResponse(EApiResponseType.SUCCESS, messageService.getMessage(EMessage.GOOD_TO_GO)));
					
				} else {
					return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
							messageService.getMessage(EMessage.SIGNIN_ACCOUNT_BLOCKED)));
				}

			} else {
				return ResponseEntity.badRequest().body(new ApiResponse(EApiResponseType.FAIL,
						messageService.getMessage(EMessage.SIGNIN_EMAIL_NOTVERIFIED)));
			}
		} else {
			return ResponseEntity.badRequest().body(
					new ApiResponse(EApiResponseType.FAIL, messageService.getMessage(EMessage.SIGNIN_USER_NOTFOUND)));
		}
	}

}
