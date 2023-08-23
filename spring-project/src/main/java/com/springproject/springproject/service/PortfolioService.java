package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Stock;
import org.springframework.http.ResponseEntity;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface PortfolioService {

    ResponseEntity<PortfolioStock> getPortfolioStockByTicker(String symbol);
    Collection<PortfolioStock> getPortfolioStock();
    void addByStockId(Integer id, Integer volume);

    void addByStockTicker(String symbol, Integer volume);


    void deleteByStockId(Integer id);

    void deleteByStockTicker(String symbol);

    ResponseEntity<PortfolioStock> updateByStockTicker(String symbol, Integer volume);


    //Integer getVolumeByStockId(Integer id);

}

