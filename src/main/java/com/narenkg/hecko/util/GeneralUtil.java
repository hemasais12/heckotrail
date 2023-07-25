package com.narenkg.hecko.util;

import java.util.regex.Pattern;

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
}
