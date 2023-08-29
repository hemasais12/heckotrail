package com.narenkg.hecko.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailOrMobileNumberInput {
	private Boolean isInputEmail;
	private String emailOrMobileNumber;
}
