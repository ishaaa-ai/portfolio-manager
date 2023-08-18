package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Stock;

import java.util.List;

public interface PortfolioService {

    List<PortfolioStock> findAll();
    PortfolioStock findAllByStockId(Integer id);

    void addByStockId(Integer id);

    void deleteByStockId(Integer id);

    Integer getVolumeByStockId(Integer id);

}

