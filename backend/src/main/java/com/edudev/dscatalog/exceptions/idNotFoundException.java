package com.edudev.dscatalog.exceptions;

public class idNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;

	public idNotFoundException(String msg) {
		super(msg);
	}

}
