package com.narenkg.hecko.controllers;

import java.util.Date;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/general")
public class GeneralController {
	@GetMapping("/public/error")
	public String error() {
		return "Error.";
	}

	@GetMapping("/public/test")
	public String allPublicAccess() {
		return "Public Content: "+(new Date());
	}
	
	@GetMapping("/secured/test")
	public String securedAccess() {
		return "Secured Content: "+(new Date());
	}
}
