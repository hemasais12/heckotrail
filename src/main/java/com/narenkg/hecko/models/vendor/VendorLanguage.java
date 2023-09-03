package com.narenkg.hecko.models.vendor;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.base.UserLanguage;
import com.narenkg.hecko.models.common.Language;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorLanguage extends UserLanguage  {
	private Vendor vendor;
}
