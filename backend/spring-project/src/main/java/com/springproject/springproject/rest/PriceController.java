package com.springproject.springproject.rest;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.service.PriceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/stock")
public class PriceController {

    @Autowired
    private PriceService service;
    private static Logger logger = LogManager.getLogger(PriceController.class);
    @GetMapping
    public List<Price> findAll() {
        logger.info("Get request for findAll");
        return service.getPrices();
    }

    @GetMapping(path="/{id}")
    public List<Price> findStockPrices(@PathVariable("id") Integer id) {
        logger.info("Get request for stock prices with id " + id);
        return service.getPriceByStock(id);
    }

    @GetMapping(path="/ticker/{symbol}")
    public List<Price> findStockPriceBySymbol(@PathVariable("symbol") String symbol) {
        logger.info("Get request for stock prices with symbol " + symbol);
        return service.getPriceByTicker(symbol);
    }

    @GetMapping(path="/dates")
    public List<Price> findStockPricesBetweenDates(@RequestParam("startDate") String startDate,
                                                   @RequestParam("endDate") String endDate) {
        logger.info("Get request for stock prices between " + startDate + " and " + endDate);
        return service.getPriceByDate(startDate, endDate);
    }

    @GetMapping(path="/ticker/{symbol}/dates")
    public List<Price> findStockPricesByTickerBetweenDates(@PathVariable("symbol") String symbol,
                                                    @RequestParam("startDate") String startDate,
                                                   @RequestParam("endDate") String endDate) {
        logger.info("Get request for " + symbol + " stock prices between " + startDate + " and " + endDate);
        return service.getPriceByTickerAndDate(symbol, LocalDateTime.parse(startDate), LocalDateTime.parse(endDate));
    }

    @GetMapping(path="/ticker/{symbol}/change")
    public Double findPercentChange(@PathVariable("symbol") String symbol,
                                         @RequestParam("startDate") String startDate,
                                         @RequestParam("endDate") String endDate) {
        logger.info("Get request for " + symbol + " percent change between " + startDate + " and " + endDate);
        return service.getPercentChange(symbol, startDate, endDate);
    }

    @GetMapping(path="/ticker/{symbol}/changeToday")
    public Double findPercentChangeToday(@PathVariable("symbol") String symbol,
                                    @RequestParam("date") String todayDate) {
        logger.info("Get request for " + symbol + " percent change between " + todayDate + " and previous day");
        return service.getPercentChangeToday(symbol, todayDate);
    }
}