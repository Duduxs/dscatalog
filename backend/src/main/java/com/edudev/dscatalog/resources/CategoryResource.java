package com.edudev.dscatalog.resources;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edudev.dscatalog.entities.Category;
import com.edudev.dscatalog.services.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryResource  {

	@Autowired
	CategoryService categoryService;
	
	@GetMapping(value="/{id}")
	public ResponseEntity<Category> findById(@PathVariable Long id) {
		Category category = categoryService.findByid(id);
		return ResponseEntity.ok().body(category);
	}
	
	@GetMapping
	public ResponseEntity<List<Category>> findAll(){
		List<Category> category = categoryService.findAll();
		return ResponseEntity.ok().body(category);
	}
}
