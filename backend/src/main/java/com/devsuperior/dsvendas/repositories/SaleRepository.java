package com.devsuperior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devsuperior.dsvendas.entities.Sale;

//Essa classe não precisa de anotation componente e nenhum outro, por padrao o JPARepository já é um componente
public interface SaleRepository extends JpaRepository<Sale, Long> {

	
	
}
