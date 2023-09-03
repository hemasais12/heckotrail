package com.narenkg.hecko.models.vendor;

import com.narenkg.hecko.models.base.UserDetail;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class VendorDetail extends UserDetail {
	private Vendor vendor;
}
