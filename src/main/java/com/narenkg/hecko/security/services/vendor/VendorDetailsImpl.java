package com.narenkg.hecko.security.services.vendor;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.narenkg.hecko.models.base.User;
import com.narenkg.hecko.models.client.Client;
import com.narenkg.hecko.models.vendor.Vendor;
import com.narenkg.hecko.security.services.UserDetailsImpl;
import com.narenkg.hecko.security.services.client.ClientDetailsImpl;

public class VendorDetailsImpl extends UserDetailsImpl {

	public VendorDetailsImpl(Long id, String email, String mobileNumber, String password,
			Collection<? extends GrantedAuthority> authorities) {
		
		super(id, email, mobileNumber, password, authorities);
	}
	
	public static VendorDetailsImpl buildForEmailUser(Vendor vendor) {
		List<GrantedAuthority> authorities = vendor.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new VendorDetailsImpl(vendor.getId(), vendor.getEmail(), vendor.getMobileNumber(), vendor.getPassword(), authorities);
	}
	
	public static VendorDetailsImpl buildForMobileUser(Vendor vendor) {
		List<GrantedAuthority> authorities = vendor.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new VendorDetailsImpl(vendor.getId(), vendor.getEmail(), vendor.getMobileNumber(), vendor.getMobilePassword(), authorities);
	}
}
