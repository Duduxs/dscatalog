package com.edudev.dscatalog.resources;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edudev.dscatalog.entities.Category;

@RestController
@RequestMapping("/categories")
public class CategoryResource  {

	@GetMapping
	public ResponseEntity<Category> test() {
		Category category = new Category(1L,"Techonology");
		return ResponseEntity.ok().body(category);
	}
}
