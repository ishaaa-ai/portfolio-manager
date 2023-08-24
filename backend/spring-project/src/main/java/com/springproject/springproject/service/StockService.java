package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface StockService {
    List<Stock> getStocks();
}
