package com.springproject.springproject.repos;

import com.springproject.springproject.entities.Price;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Collection;

public interface PriceRepository extends JpaRepository<Price, Integer> {
    Collection<Price> findAllByStockId(int stockId);
    Collection<Price> findAllByRecordDate(String record_date);
    Collection<Price> findByRecordDateBetween(LocalDateTime startDate, LocalDateTime endDate);
}
