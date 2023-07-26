package com.narenkg.hecko.payload.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MobileSignupRequest {
	@NotBlank
	@Size(min = 3, max = 20)
	private String mobileNumber;

	@NotBlank
	@Size(min = 6, max = 10)
	private String otp;
}
