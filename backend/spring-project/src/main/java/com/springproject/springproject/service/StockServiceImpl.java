package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.repos.PriceRepository;
import com.springproject.springproject.repos.StockRepository;
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
public class StockServiceImpl implements StockService{
    @Autowired
    private StockRepository repository;

    public List<Stock> getStocks() {
        return repository.findAll();
    }
}
