package com.springproject.springproject.repos;

import com.springproject.springproject.entities.PortfolioStock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface PortfolioRepository extends JpaRepository<PortfolioStock, Integer> {
    Collection<PortfolioStock> findByStockId(Integer stockId);

    void addByStockId(Integer stockId);

    void deleteByStockId(Integer stockId);
}
