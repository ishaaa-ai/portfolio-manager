package com.springproject.springproject.service;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.repos.PortfolioRepository;
import com.springproject.springproject.repos.PriceRepository;
import com.springproject.springproject.repos.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PortfolioServiceImpl implements PortfolioService {
    @Autowired
    private PortfolioRepository repository;

    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private PriceRepository priceRepository;

    public ResponseEntity<PortfolioStock> getPortfolioStockByTicker(String symbol) {
        Stock stock = stockRepository.findBySymbol(symbol);
        Optional<PortfolioStock> checkStock = repository.findByStock(stock);
        if (checkStock.isPresent()){
            return new ResponseEntity<>(checkStock.get(),HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public Collection<PortfolioStock> getPortfolioStock() {
        return repository.findAll();
    }

    public Double getNetWorth(String date) {
        List<PortfolioStock> stocks = repository.findAll();
        double total = 0.0;
        LocalDateTime localDate = LocalDateTime.parse(date);
        for (PortfolioStock s:stocks) {
            Integer volume = s.getVolume();
            List<Price> prices = (List<Price>) priceRepository.findByRecordDateAndSymbol(s.getStock().getSymbol(), localDate, localDate);
            total += (prices.get(0).getClosePrice() * volume);
        }
        return total;
    }

    public void addByStockId(Integer id, Integer volume) {
        Stock stock = stockRepository.findById(id).get();
        PortfolioStock newStock = new PortfolioStock(stock, volume);
        repository.save(newStock);
    }

    public void addByStockTicker(String symbol, Integer volume) {
        Stock stock = stockRepository.findBySymbol(symbol);
        PortfolioStock newStock = new PortfolioStock(stock, volume);
        repository.save(newStock);
    }

    public void deleteByStockId(Integer id) {
        Stock stock = stockRepository.findById(id).get();
        repository.deleteByStock(stock);
    }
    public void deleteByStockTicker(String symbol) {
        Stock stock = stockRepository.findBySymbol(symbol);
        repository.deleteByStock(stock);
    }

    public ResponseEntity<PortfolioStock> updateByStockTicker(String symbol, Integer volume) {
        Stock stock = stockRepository.findBySymbol(symbol);
        Optional<PortfolioStock> checkStock = repository.findByStock(stock);
        if (checkStock.isPresent()){
            PortfolioStock existingStock = checkStock.get();
            existingStock.setVolume(volume);
            return new ResponseEntity<>(repository.save(existingStock), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}
