package com.narenkg.hecko.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.narenkg.hecko.models.Category;
import com.narenkg.hecko.repository.CategoryRepository;

@Service
public class CategoryService {
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	private List<Category> allCategories = null;
	
	public void init() {
		if (allCategories == null) {
			allCategories = categoryRepository.findAll();
			logger.info("Categories loaded: " + allCategories.size());
		}
	}
	
	public Category getByCatFamilyAndCatKeyAndCatValue(String family, String key, String value) {
		init();

		for (Category category : allCategories) {
			if (category.getCatFamily().equals(family) && category.getCatKey().equals(key)
					&& category.getCatValue().equals(value)) {
				return category;
			}
		}
		return null;
	}
	
	public List<Category> getByCatFamilyAndCatKeyAndCatValueIn(String family, String key, String[] values) {
		init();
		List<Category> categories = new ArrayList<Category>();
		List<String> possibleValues = Arrays.asList(values);

		for (Category category : allCategories) {
			if (category.getCatFamily().equals(family) && category.getCatKey().equals(key)
					&& possibleValues.contains(category.getCatValue())) {
				categories.add(category);
			}
		}
		return categories;
	}

	

	public List<Category> getByCatFamilyAndCatKey(String family, String key) {
		init();
		List<Category> categories = new ArrayList<Category>();

		for (Category category : allCategories) {
			if (category.getCatFamily().equals(family) && category.getCatKey().equals(key)) {
				categories.add(category);
			}
		}
		return categories;
	}
	
	public List<Category> getByCatFamily(String family) {
		init();
		List<Category> categories = new ArrayList<Category>();

		for (Category category : allCategories) {
			if (category.getCatFamily().equals(family)) {
				categories.add(category);
			}
		}
		return categories;
	}
	
	public HashMap<String, Category> getMapByCatFamily(String family) {
		init();
		HashMap<String, Category> mapCategories = new HashMap<String, Category>();

		for (Category category : allCategories) {
			if (category.getCatFamily().equals(family)) {
				mapCategories.put(category.getCatKey(), category);
			}
		}
		return mapCategories;
	}
}
