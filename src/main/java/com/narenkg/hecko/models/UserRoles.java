package com.narenkg.hecko.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.narenkg.hecko.models.audit.UserDateAudit;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "UserRoles")
public class UserRoles extends UserDateAudit  {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL)
	private User user;
	
	@JsonBackReference
    @ManyToOne(cascade = CascadeType.ALL)
	private Role role;
	
	private Boolean isDefault;
}
