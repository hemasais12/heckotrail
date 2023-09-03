package com.narenkg.hecko.models.vendor;

import java.time.Instant;

import com.narenkg.hecko.models.audit.UserDateAudit;
import com.narenkg.hecko.models.base.ModuleUse;
import com.narenkg.hecko.models.common.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class VendorModuleUse extends ModuleUse {
	@ManyToOne
	private Vendor vendor;

}
