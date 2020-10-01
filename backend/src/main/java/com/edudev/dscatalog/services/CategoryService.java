package com.edudev.dscatalog.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.edudev.dscatalog.dto.CategoryDTO;
import com.edudev.dscatalog.entities.Category;
import com.edudev.dscatalog.repositories.CategoryRepository;
import com.edudev.dscatalog.services.exceptions.DatabaseException;
import com.edudev.dscatalog.services.exceptions.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository categoryRepository;

	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> category = categoryRepository.findById(id);
		Category entity = category.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new CategoryDTO(entity);
	}

	@Transactional(readOnly = true)
	public Page<CategoryDTO> findAllPaged(PageRequest pageRequest) {
		Page<Category> list = categoryRepository.findAll(pageRequest);
		return list.map(x -> new CategoryDTO(x));
	}

	@Transactional
	public CategoryDTO insert(CategoryDTO categoryDTO) {
		Category category = new Category();
		category.setName(categoryDTO.getName());

		category = categoryRepository.save(category);
		return new CategoryDTO(category);
	}

	@Transactional
	public CategoryDTO update(Long id, CategoryDTO categoryDTO) {
		try {
			Category category = categoryRepository.getOne(id);
			category.setName(categoryDTO.getName());

			categoryRepository.save(category);
			return new CategoryDTO(category);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Entity not found");
		}
	}

	public void delete(Long id) {
		try {
			categoryRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Entity not found");
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
	}

}
