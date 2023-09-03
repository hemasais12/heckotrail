package com.narenkg.hecko.models.vendor;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.common.Category;
import com.narenkg.hecko.models.common.Document;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
public class VendorDocument extends UserDateAudit {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonBackReference
	@ManyToOne
	private Vendor vendor;

	@ManyToOne
	private Category docType;

	@OneToOne
	private Document document;

	@NotBlank
	@Size(max = 5)
	private String docExtension;

	@NotBlank
	@Size(max = 80)
	private String docFileName;
}
