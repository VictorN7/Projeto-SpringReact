package com.devsuperior.dsvendas.dto;

import java.io.Serializable; // Interface que garante que os OBJ sejam convertidos para bytes, sendo assim trafegado...

import com.devsuperior.dsvendas.entities.Seller;

public class SellerDTO implements Serializable{


	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	
	public SellerDTO() {
		
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	public SellerDTO(Seller Entity) {
		id = Entity.getId();
		name = Entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
