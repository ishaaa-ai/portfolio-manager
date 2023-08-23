package com.springproject.springproject.repos;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

public interface PortfolioRepository extends JpaRepository<PortfolioStock, Integer> {
    Optional<PortfolioStock> findByStock(Stock stock);

//    void addByStock(Integer stockId);
//
    void deleteByStock(Stock stock);
}
