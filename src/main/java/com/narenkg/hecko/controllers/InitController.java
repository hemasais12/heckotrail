package com.narenkg.hecko.controllers;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.narenkg.hecko.models.Role;
import com.narenkg.hecko.models.User;
import com.narenkg.hecko.models.enums.ERole;
import com.narenkg.hecko.payload.request.LoginRequest;
import com.narenkg.hecko.payload.request.SignupRequest;
import com.narenkg.hecko.payload.response.JwtResponse;
import com.narenkg.hecko.payload.response.MessageResponse;
import com.narenkg.hecko.repository.RoleRepository;
import com.narenkg.hecko.repository.UserRepository;
import com.narenkg.hecko.security.jwt.JwtUtils;
import com.narenkg.hecko.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class InitController {

	@Autowired
	RoleRepository roleRepository;

	private boolean isDBUpdatePending = true;

	// http://localhost:2510/api/dbsetup?requestId=0
	@GetMapping("/dbsetup")
	public String updateTeamApp(@RequestParam(value = "requestId") int requestId) throws Exception {
		String msg = "Welcome to the App. " + "Let's Login or SignUp";

		if (isDBUpdatePending) {
			switch (requestId) {
			case 999:
				setInitialValuesInDB();
				break;
			}
		}
		return msg;
	}

	public void setInitialValuesInDB() {
		ERole roles[] = ERole.values();
		for (ERole role : roles) {
			Role r = new Role(role);
			roleRepository.save(r);
		}
		roleRepository.flush();
	}

}
