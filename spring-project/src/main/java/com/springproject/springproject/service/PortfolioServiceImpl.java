package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.repos.PortfolioRepository;
import com.springproject.springproject.repos.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Transactional
public class PortfolioServiceImpl implements PortfolioService {
    @Autowired
    private PortfolioRepository repository;

    @Autowired
    private StockRepository stockRepository;

    public Collection<PortfolioStock> getPortfolioStock() {
        return repository.findAll();
    }
    public PortfolioStock getPortfolioStockByStockId(Integer id) {
        return repository.findByStockId(id);
    }

    public void addByStockId(Integer id, Integer volume) {
        Stock stock = stockRepository.findById(id).get();
        PortfolioStock newStock = new PortfolioStock(stock, volume);
        repository.save(newStock);
    }

    public void deleteByStockId(Integer id) {
        PortfolioStock stock = repository.findByStockId(id);
        repository.delete(stock);
    }


}
