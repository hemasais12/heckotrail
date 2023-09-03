package com.narenkg.hecko.payload.response;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.base.UserDetail;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserProfile {
	private User user;
	private JwtResponse jwtAuthenticationResponse;

}
