package com.springproject.springproject.service;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.repos.PriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PriceServiceImpl {
    @Autowired
    private PriceRepository repository;

    public List<Price> getPrices() {
        return repository.findAll();
    }
    public Collection<Price> getPriceByStock(Integer id) {
        return repository.findAllByStockId(id);
    }
    public Price getPriceByStockAndDate(Integer id, String date) {
        return repository.findAllByDateAndStockId(date, id);
    }
}
