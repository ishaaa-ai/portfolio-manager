package com.springproject.springproject.rest;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Price;
import com.springproject.springproject.entities.Stock;
import com.springproject.springproject.service.PortfolioService;
import com.springproject.springproject.service.StockService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService service;
    private static Logger logger = LogManager.getLogger(PriceController.class);
    @RequestMapping(method = RequestMethod.GET)
    public List<Stock> findAll() {
        logger.info("Get request for findAll");
        return service.getStocks();
    }
}
