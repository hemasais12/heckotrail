package com.narenkg.hecko.constants.beans;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmailData {
	private String to;
	private String cc;
	private String subject;
	private Map<String, Object> model;

	@Override
	public String toString() {
		return "Mail{" + "from='"  + '\'' + ", to='" + to + '\'' + ", subject='" + subject + '\'' + ", content='"
				+ '\'' + '}';
	}
}
