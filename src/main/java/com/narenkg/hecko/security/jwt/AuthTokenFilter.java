package com.narenkg.hecko.security.jwt;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.narenkg.hecko.consts.IConstants;
import com.narenkg.hecko.security.services.UserDetailsServiceImpl;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class AuthTokenFilter extends OncePerRequestFilter {
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private UserDetailsServiceImpl userDetailsService;

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		logger.info("doFilterInternal -----*****************************----------->:");
		try {
			String jwt = parseJwt(request);
			if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
				String emailOrMobileNumber = jwtUtils.getUserNameFromJwtToken(jwt);
				
				
				
				logger.info("emailOrMobileNumber -----*****************************----------->:"+emailOrMobileNumber);
				
				if(isRequestSourceVendor(request)) {
					emailOrMobileNumber = IConstants.APP_VENDOR_PREFIX + emailOrMobileNumber;
				} else {
					emailOrMobileNumber = IConstants.APP_CLIENT_PREFIX + emailOrMobileNumber;
				}
				
				UserDetails userDetails = userDetailsService.loadUserByUsername(emailOrMobileNumber);
				
				UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
						userDetails, null, userDetails.getAuthorities());
				authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

				SecurityContextHolder.getContext().setAuthentication(authentication);
			}
		} catch (Exception e) {
			logger.error("Cannot set user authentication: {}", e);
		}

		filterChain.doFilter(request, response);
	}

	private String parseJwt(HttpServletRequest request) {
		String headerAuth = request.getHeader("Authorization");

		if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
			return headerAuth.substring(7);
		}

		return null;
	}
	
	private boolean isRequestSourceVendor(HttpServletRequest request) {
		String headerSource = request.getHeader("TempDate");
		
		logger.info("headerSource ---------------->:"+headerSource);

		if (StringUtils.hasText(headerSource) && headerSource.startsWith("Date ")) {
			return true;
		}

		return false;
	}
}
