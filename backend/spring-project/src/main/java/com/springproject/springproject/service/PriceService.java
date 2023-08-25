package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface PriceService {
    List<Price> getPrices();
    List<Price> getPriceByStock(Integer id);
    List<Price> getPriceByTicker(String symbol);
    List<Price> getPriceByTickerAndDate(String symbol, LocalDateTime startDate, LocalDateTime endDate);
    List<Price> getPriceByDate(String startDate, String endDate);

    Double getPercentChange(String symbol, String startDate, String endDate);

    Double getPercentChangeToday(String symbol, String todayDate);

}
