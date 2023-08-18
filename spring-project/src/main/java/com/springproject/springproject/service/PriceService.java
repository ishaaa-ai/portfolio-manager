package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;

import java.util.List;

public interface PriceService {
    List<Price> getPrices();
    List<Price> getPriceByStock(Integer id);
    Price getPriceByStockAndDate(Integer id, String date);
}
