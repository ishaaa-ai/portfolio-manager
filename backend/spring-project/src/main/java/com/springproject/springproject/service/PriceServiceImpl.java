package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.repos.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PriceServiceImpl implements PriceService{
    @Autowired
    private PriceRepository repository;

    public List<Price> getPrices() {
        return repository.findAll();
    }
    public List<Price> getPriceByStock(Integer id) {
        return (List<Price>) repository.findAllByStockId(id);
    }

    public List<Price> getPriceByTicker(String symbol) { return (List<Price>) repository.findAllBySymbol(symbol); }

    public List<Price> getPriceByTickerAndDate(String symbol, String startDate, String endDate) {
        return (List<Price>) repository.findByRecordDateAndSymbol(symbol,
                LocalDateTime.parse(startDate), LocalDateTime.parse(endDate));
    }
    public List<Price> getPriceByDate(String startDate, String endDate) {
        return (List<Price>) repository.findByRecordDateBetween(LocalDateTime.parse(startDate), LocalDateTime.parse(endDate));
    };

    public Double getPercentChange(String symbol, String startDate, String endDate) {
        List<Price> prices = this.getPriceByTickerAndDate(symbol, startDate, endDate);
        double original = prices.get(0).getClosePrice();
        double latest = prices.get(prices.size() - 1).getClosePrice();
        double change = (latest - original) / original * 100;
        return Math.round(change * 100.0) / 100.0;
    }

}
