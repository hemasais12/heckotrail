package com.narenkg.hecko.services;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.Currency;
import com.narenkg.hecko.repository.CurrencyRepository;

@Service
public class CurrencyService {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private CurrencyRepository currencyRepository;

	private HashMap<Long, Currency> allCurrencies = null;

	public void init() {
		if (allCurrencies == null) {
			allCurrencies = new HashMap<Long, Currency>();
			List<Currency> currencyList = currencyRepository.findAll();

			for (Currency currency : currencyList) {
				allCurrencies.put(currency.getId(), currency);
			}
			logger.info("Currencies loaded: " + allCurrencies.size());
		}
	}

	public Currency get(Long id) {
		init();
		return allCurrencies.get(id);
	}

}
