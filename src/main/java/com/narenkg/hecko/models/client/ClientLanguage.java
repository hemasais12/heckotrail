package com.narenkg.hecko.models.client;

import com.narenkg.hecko.models.base.UserLanguage;
import com.narenkg.hecko.models.common.Language;

import jakarta.persistence.Entity;
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
public class ClientLanguage extends UserLanguage  {
	private Client client;
}
