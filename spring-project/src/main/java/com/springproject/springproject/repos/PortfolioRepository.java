package com.springproject.springproject.repos;

import com.springproject.springproject.entities.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface PortfolioRepository extends JpaRepository<Portfolio, Integer> {
    Collection<Portfolio> findByStockId(Integer stockId);
}
