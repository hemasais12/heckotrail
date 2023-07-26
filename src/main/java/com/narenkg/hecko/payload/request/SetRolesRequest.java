package com.narenkg.hecko.payload.request;

import java.util.ArrayList;

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
public class SetRolesRequest {
	@NotBlank
	@Size(min = 3, max = 20)
	private String emailOrMobileNumber;

	private ArrayList<Long> roles;
}
