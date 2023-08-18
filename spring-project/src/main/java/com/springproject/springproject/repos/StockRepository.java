package com.springproject.springproject.repos;

import com.springproject.springproject.entities.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface StockRepository extends JpaRepository<Stock, Integer> {

}
