package com.narenkg.hecko.security;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.narenkg.hecko.security.jwt.AuthEntryPointJwt;
import com.narenkg.hecko.security.jwt.AuthTokenFilter;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;

@Configuration
@EnableMethodSecurity

public class WebSecurityConfig {

	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	private AuthEntryPointJwt unauthorizedHandler;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Bean
	public AuthTokenFilter authenticationJwtTokenFilter() {
		logger.info("*************************************************************authenticationJwtTokenFilter ");
		return new AuthTokenFilter();
	}


	@Bean
	public DaoAuthenticationProvider userAuthenticationProvider() {
		logger.info("*************************************************************authenticationProvider ");
		DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

		authProvider.setUserDetailsService(userDetailsServiceImpl);
		authProvider.setPasswordEncoder(passwordEncoder());

		return authProvider;
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		logger.info("*************************************************************authenticationManager ");
		return authConfig.getAuthenticationManager();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		logger.info("*************************************************************passwordEncoder ");
		return new BCryptPasswordEncoder();
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

		logger.info("*************************************************************SecurityFilterChain filterChain = "
				+ (new Date()));

		// TODO: Add web url security
		http.csrf(csrf -> csrf.disable())
				.exceptionHandling(exception -> exception.authenticationEntryPoint(unauthorizedHandler))
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(
						auth -> auth.requestMatchers("/api/auth/**").permitAll().requestMatchers("/api/init/**")
								.permitAll().requestMatchers("/api/test/**").permitAll().anyRequest().authenticated());

		http.authenticationProvider(userAuthenticationProvider());
		
		//http.authenticationProvider(null)

		http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
	

	/*@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(clientAuthenticationProvider())
				.authenticationProvider(vendorAuthenticationProvider());
	}*/

}
