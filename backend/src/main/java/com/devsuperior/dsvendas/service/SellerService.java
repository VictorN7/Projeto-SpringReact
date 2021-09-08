package com.devsuperior.dsvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

// Esta classe é um serviço que por sua vez chama um repository, tendo o conceito de camadas

@Service
public class SellerService {
	
	@Autowired // Com isso, a instancia é feita automaticamente de forma transparente
	private SellerRepository repository;
	
	// Repository retorna uma entidade
	public List<SellerDTO> finAll(){
		List<Seller> result = repository.findAll(); // Depois de passar todas as entidades para a lista, é preciso fazer a conversão para DTO
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList()); // Expressão lambda que faz a conversão de Seller para DTO
		//map - converte a coleção original para uma nova(DTO). para cada x da lista original, ele cria um novo obj, passando o 'x' como argumento  
		// e depois é preciso converter novamente para lista 'collect(Collectors.toList())'
	}

}
