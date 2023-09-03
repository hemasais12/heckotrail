package com.narenkg.hecko.models.common;

import com.narenkg.hecko.models.audit.DateAudit;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
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
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Size(max = 10)
	private String color;
	
	private String messageKey;
	
	@ManyToOne
	private Category messageType;

	@NotBlank
	@Size(max = 200)
	private String title;
	
	@Lob
	private String description;
	
	@Lob
	private String remarks;
	
	public Message(String color, String messageKey, Category messageType, String title, String description, String remarks) {
		this.color = color;
		this.messageKey = messageKey;
		this.messageType = messageType;
		this.title = title;
		this.description = description;
		this.remarks = remarks;		
	}

}
