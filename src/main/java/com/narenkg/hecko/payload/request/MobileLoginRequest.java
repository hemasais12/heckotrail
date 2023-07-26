package com.narenkg.hecko.payload.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MobileLoginRequest {
	@NotBlank
	private String mobileNumber;

	@NotBlank
	private String otp;
}
