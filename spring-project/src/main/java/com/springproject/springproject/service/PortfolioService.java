package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Stock;

import java.util.Collection;
import java.util.List;

public interface PortfolioService {

    Collection<PortfolioStock> getPortfolioStock();
    PortfolioStock getPortfolioStockByStockId(Integer id);

    void addByStockId(Integer id, Integer volume);

    void deleteByStockId(Integer id);

    //Integer getVolumeByStockId(Integer id);

}

