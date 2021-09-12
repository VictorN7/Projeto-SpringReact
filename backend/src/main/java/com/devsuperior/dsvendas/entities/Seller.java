package com.devsuperior.dsvendas.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity  
@Table(name = "tb_sellers")
public class Seller {


	@Id // Indica qual o atributo daqui é a chabe primaria	
	@GeneratedValue(strategy = GenerationType.IDENTITY) // Informa que esse id é auto-incrementavel
	private Long id ;
	private String name;
	
	
	@OneToMany(mappedBy ="seller" ) // No mappedby é colocado o atributo que esta no sale
	private List<Sale> sales = new ArrayList <>(); // List é uma interface, e o ArrayList é uma classe
	
	
	public Seller() {
		 
	}

	public Seller(Long id, String name) {
		this.id = id;
		this.name = name;
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

	public List<Sale> getSales() {
		return sales;
	}

	
}