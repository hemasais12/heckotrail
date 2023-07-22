package com.narenkg.hecko.payload.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String email;
	private String phone;
	private List<String> roles;

	public JwtResponse(String accessToken, Long id, String email, String phone, List<String> roles) {
		this.token = accessToken;
		this.id = id;
		this.phone = phone;
		this.email = email;
		this.roles = roles;
	}

}
