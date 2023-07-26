package com.narenkg.hecko.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.narenkg.hecko.models.User;

public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private Long id;

	private String email;
	
	private String mobileNumber;

	@JsonIgnore
	private String password;
	
	

	private Collection<? extends GrantedAuthority> authorities;
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	public UserDetailsImpl(Long id, String email, String mobileNumber, String password,
			Collection<? extends GrantedAuthority> authorities) {
		
		this.id = id;
		this.email = email;
		this.mobileNumber = mobileNumber;
		this.password = password;
		this.authorities = authorities;
	}

	public static UserDetailsImpl build(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new UserDetailsImpl(user.getId(), user.getEmail(), user.getMobileNumber(), user.getPassword(), authorities);
	}
	
	public static UserDetailsImpl buildForMobileLogin(User user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name())).collect(Collectors.toList());
		
		return new UserDetailsImpl(user.getId(), user.getEmail(), user.getMobileNumber(), user.getMobilePassword(), authorities);
	}
	

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}
	
	public String getMobileNumber() {
		return mobileNumber;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		if(mobileNumber==null)
			return email;
		else 
			return mobileNumber;
	}
}
