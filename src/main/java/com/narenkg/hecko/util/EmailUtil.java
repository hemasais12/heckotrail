package com.narenkg.hecko.util;

public class EmailUtil {

	public static boolean isEmail(String value) {
		if (value != null && value.indexOf("@") > -1)
			return true;

		return false;
	}

}
