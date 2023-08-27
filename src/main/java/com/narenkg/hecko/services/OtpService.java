package com.narenkg.hecko.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.narenkg.hecko.constants.beans.EmailData;
import com.narenkg.hecko.constants.beans.SmsData;
import com.narenkg.hecko.consts.IConstants;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.TimeUnit;

@Service
public class OtpService {

	private static final Integer EXPIRE_MIN = 60;
	private LoadingCache<String, String> otpCache;

	@Autowired
	private SmsService smsService;
	
	@Autowired
	private EmailService emailService;
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	public OtpService() {
		otpCache = CacheBuilder.newBuilder().expireAfterWrite(EXPIRE_MIN, TimeUnit.MINUTES).build(new CacheLoader<>() {
			@Override
			public String load(String s) {
				return "";
			}
		});
	}
	
	public String createOTP() {
		int length = IConstants.OTP_LENGTH;
		String numbers = "1234567890";
		Random random = new Random();
		char[] otp = new char[length];

		for (int i = 0; i < length; i++) {
			otp[i] = numbers.charAt(random.nextInt(numbers.length()));
		}
		return new String(otp);
	}

	@Async
	public void generateOTP(String mobileNumber) throws Exception {
		String strOtp = createOTP();
		otpCache.put(mobileNumber, strOtp);

		SmsData smsData = new SmsData();
		smsData.setTo(mobileNumber);
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("otp", strOtp);
		smsData.setModel(model);

		smsService.sendOtpSms(smsData);
	}
	
	@Async
	public void generateEmailOTP(String emailId) throws Exception {
		String strOtp = createOTP();
		otpCache.put(emailId, strOtp);
		
		EmailData emailData = new EmailData();
		
		emailData.setTo(emailId);
		emailData.setSubject("Hecko OTP");
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("otp", strOtp);
		emailData.setModel(model);

		emailService.sendOtpEmail(emailData);
	}

	// get saved otp
	public String getCacheOtp(String key) {
		try {
			return otpCache.get(key);
		} catch (Exception e) {
			return "";
		}
	}

	// clear stored otp
	public void clearOtp(String key) {
		otpCache.invalidate(key);
	}

}
