package com.springproject.springproject.repos;

import com.springproject.springproject.entities.Price;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.Collection;

public interface PriceRepository extends JpaRepository<Price, Integer> {
    Collection<Price> findAllByStockId(Integer stockId);
    @Query(value = "SELECT p FROM Price p JOIN p.stock s WHERE s.symbol = ?1")
    Collection<Price> findAllBySymbol(String symbol);
    Collection<Price> findAllByRecordDate(String record_date);
    Collection<Price> findByRecordDateBetween(LocalDateTime startDate, LocalDateTime endDate);

    @Query(value = "SELECT p FROM Price p JOIN p.stock s WHERE s.symbol = ?1 AND p.recordDate BETWEEN ?2 AND ?3")
    Collection<Price> findByRecordDateAndSymbol(String symbol, LocalDateTime startDate, LocalDateTime endDate);
}
