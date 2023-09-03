package com.narenkg.hecko.security.services.client;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.client.Client;
import com.narenkg.hecko.security.services.UserDetailsImpl;

public class ClientDetailsImpl extends UserDetailsImpl {

	public ClientDetailsImpl(Long id, String email, String mobileNumber, String password,
			Collection<? extends GrantedAuthority> authorities) {

		super(id, email, mobileNumber, password, authorities);
	}

	public static ClientDetailsImpl buildForEmailUser(Client client) {
		List<GrantedAuthority> authorities = client.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new ClientDetailsImpl(client.getId(), client.getEmail(), client.getMobileNumber(), client.getPassword(), authorities);
	}
	
	public static ClientDetailsImpl buildForMobileUser(Client client) {
		List<GrantedAuthority> authorities = client.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new ClientDetailsImpl(client.getId(), client.getEmail(), client.getMobileNumber(), client.getMobilePassword(), authorities);
	}
}
