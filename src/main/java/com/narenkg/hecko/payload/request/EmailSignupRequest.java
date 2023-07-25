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
public class EmailSignupRequest {
	@NotBlank
	@Size(min = 3, max = 50)
	private String email;
	
	@NotBlank
	@Size(min = 6, max = 120)
	private String password;
	
	@NotBlank
	@Size(min = 6, max = 120)
	private String confirmPassword;
	
	@NotBlank
	@Size(min = 6, max = 120)
	private String otp;
}
