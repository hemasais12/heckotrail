package com.narenkg.hecko.models.base;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.common.Language;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@MappedSuperclass
public class UserLanguage extends UserDateAudit  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@OneToOne
	private Language language;
	
	private Boolean canRead;
	
	private Boolean canWrite;

}
