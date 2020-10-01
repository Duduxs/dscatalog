package com.edudev.dscatalog.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edudev.dscatalog.dto.CategoryDTO;
import com.edudev.dscatalog.entities.Category;
import com.edudev.dscatalog.repositories.CategoryRepository;
import com.edudev.dscatalog.services.exceptions.EntityNotFoundException;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;
	
	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> category = categoryRepository.findById(id);
		Category entity = category.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new CategoryDTO(entity);
	}
	
	@Transactional(readOnly = true)
	public List<CategoryDTO> findAll(){
		List<Category> list = categoryRepository.findAll();
		return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
	}

	
}
