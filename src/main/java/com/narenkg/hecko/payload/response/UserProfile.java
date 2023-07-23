package com.narenkg.hecko.payload.response;

import java.util.HashSet;
import java.util.Set;
import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.UserDetail;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
	private String email;
	private String phone;
	private Set<Role> roles = new HashSet<>();
	private Boolean isVerified;
	private Boolean isBlocked;
	private UserDetail userDetail;
	private JwtResponse jwtAuthenticationResponse;

}
