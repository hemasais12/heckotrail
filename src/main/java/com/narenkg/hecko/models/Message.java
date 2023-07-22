package com.narenkg.hecko.models;

import com.narenkg.hecko.models.audit.DateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Message extends DateAudit{
	
	@NotBlank
	@Size(max = 10)
	private String color;
	
	private String messageKey;
	
	private Category messageType;

	@NotBlank
	@Size(max = 200)
	private String title;
	
	@Lob
	private String description;
	
	@Lob
	private String remarks;

}
