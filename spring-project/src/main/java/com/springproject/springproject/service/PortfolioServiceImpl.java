package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.repos.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

@Service
@Transactional
public class PortfolioServiceImpl {
    @Autowired
    private PortfolioRepository repository;

    public Collection<PortfolioStock> getPortfolioStock() {
        return repository.findAll();
    }
    public Collection<PortfolioStock> getPortfolioStockByStockId(Integer id) {
        return repository.findByStockId(id);
    }

    public void addByStockId(Integer id) { repository.addByStockId(id); }

    public void deleteByStockId(Integer id) { repository.deleteByStockId(id); }


}
