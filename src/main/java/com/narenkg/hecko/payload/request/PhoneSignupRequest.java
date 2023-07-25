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
public class PhoneSignupRequest {
	@NotBlank
	@Size(min = 3, max = 20)
	private String phone;

	@NotBlank
	@Size(min = 6, max = 10)
	private String otp;
}
