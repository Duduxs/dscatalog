package com.edudev.dscatalog.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edudev.dscatalog.entities.Category;
import com.edudev.dscatalog.exceptions.idNotFoundException;
import com.edudev.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public Category findByid(Long id) {
		Optional<Category> category = categoryRepository.findById(id);
		return category.orElseThrow(() -> new idNotFoundException("Id not found!"));
	}
	
	@Transactional(readOnly = true)
	public List<Category> findAll(){
		return categoryRepository.findAll();
	}
	
}
