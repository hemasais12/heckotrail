package com.narenkg.hecko.util;

import java.security.SecureRandom;
import java.util.Random;
import java.util.regex.Pattern;

import com.narenkg.hecko.consts.IConstants;

public class GeneralUtil {

	public static boolean patternMatches(String input, String regexPattern) {
		return Pattern.compile(regexPattern).matcher(input).matches();
	}

	public static boolean isEmail(String emailAddress) {
		String regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
				+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
		return patternMatches(emailAddress, regexPattern);
	}

	public static boolean isMobileNumber(String mobileNumber) {
		String regexPattern = "^(\\+\\d{10,12})$";
		return patternMatches(mobileNumber, regexPattern);
	}

	public static String createAlphaNumbericRandomCode(int codeLength) {
		char[] chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".toCharArray();
		StringBuilder code = new StringBuilder();
		Random random = new SecureRandom();
		for (int i = 0; i < codeLength; i++) {
			char c = chars[random.nextInt(chars.length)];
			code.append(c);
		}
		return code.toString();
	}

	public static String getUsername(String username) {
		if (IConstants.hasUsernamePrefix) {
			return username.substring(IConstants.APP_USER_PREFIX_LENGTH);
		} else {
			return username;
		}
	}
	
	public static String getUsernameType(String username) {
		if (IConstants.hasUsernamePrefix) {
			return username.substring(0, IConstants.APP_USER_PREFIX_LENGTH);
		} else {
			return username;
		}
	}
	
	public static String prefixUsernameWithClientType(String username) {
		if (IConstants.hasUsernamePrefix) {
			return IConstants.APP_CLIENT_PREFIX + username;
		} else {
			return username;
		}
	}
	
	public static String prefixUsernameWithVendorType(String username) {
		if (IConstants.hasUsernamePrefix) {
			return IConstants.APP_VENDOR_PREFIX + username;
		} else {
			return username;
		}
	}
		
}
