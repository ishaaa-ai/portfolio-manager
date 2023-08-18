package com.springproject.springproject.repos;

import com.springproject.springproject.entities.Price;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface PriceRepository extends JpaRepository<Price, Integer> {
    Collection<Price> findAllByStockId(int stockId);
    Collection<Price> findAllByDate(String record_date);
    Price findAllByDateAndStockId(String record_date, int stockId);
}
