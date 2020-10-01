package com.edudev.dscatalog.resources;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edudev.dscatalog.dto.CategoryDTO;
import com.edudev.dscatalog.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryResource  {

	@Autowired
	CategoryService categoryService;
	
	@GetMapping("/{id}")
	public ResponseEntity<CategoryDTO> findById(@PathVariable Long id) {
		CategoryDTO categoryDTO = categoryService.findById(id);
		return ResponseEntity.ok().body(categoryDTO);
	}
	
	@GetMapping
	public ResponseEntity<List<CategoryDTO>> findAll(){
		List<CategoryDTO> category = categoryService.findAll();
		return ResponseEntity.ok().body(category);
	}
}
