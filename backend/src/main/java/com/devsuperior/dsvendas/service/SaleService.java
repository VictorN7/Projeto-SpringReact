package com.devsuperior.dsvendas.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

// Esta classe é um serviço que por sua vez chama um repository, tendo o conceito de camadas

@Service
public class SaleService {
	
	@Autowired // Com isso, a instancia é feita automaticamente de forma transparente
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	

	// Repository retorna uma entidade
	// Pageable realiza facilmente a busca paginada 
	
	@Transactional(readOnly = true) // Garante que toda operação com o banco seja feita nessa parte do código
	public Page<SaleDTO> finAll(Pageable pageable){
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable); // Depois de passar todas as entidades para a lista, é preciso fazer a conversão para DTO
		return result.map(x -> new SaleDTO(x)); // Expressão lambda que faz a conversão de Seller para DTO
		//map - converte a coleção original para uma nova(DTO). para cada x da lista original, ele cria um novo obj, passando o 'x' como argumento  
		// e depois é preciso converter novamente para lista 'collect(Collectors.toList())'
	}

}
