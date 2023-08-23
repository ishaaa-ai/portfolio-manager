package com.springproject.springproject.rest;

import com.springproject.springproject.entities.Price;
import com.springproject.springproject.service.PriceService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/stock")
public class PriceController {

    @Autowired
    private PriceService service;
    private static Logger logger = LogManager.getLogger(PriceController.class);
    @RequestMapping(method = RequestMethod.GET)
    public List<Price> findAll() {
        logger.info("Get request for findAll");
        return service.getPrices();
    }

    @RequestMapping(method = RequestMethod.GET, path="/{id}")
    public List<Price> findStockPrices(@PathVariable("id") Integer id) {
        logger.info("Get request for stock prices with id " + id);
        return service.getPriceByStock(id);
    }

    @RequestMapping(method = RequestMethod.GET, path="/ticker/{symbol}")
    public List<Price> findStockPriceBySymbol(@PathVariable("symbol") String symbol) {
        logger.info("Get request for stock prices with symbol " + symbol);
        return service.getPriceByTicker(symbol);
    }

    @RequestMapping(method = RequestMethod.GET, path="/dates")
    public List<Price> findStockPricesBetweenDates(@RequestParam("startDate") String startDate,
                                                   @RequestParam("endDate") String endDate) {
        logger.info("Get request for stock prices between " + startDate + " and " + endDate);
        return service.getPriceByDate(startDate, endDate);
    }

    @RequestMapping(method = RequestMethod.GET, path="/ticker/{symbol}/dates")
    public List<Price> findStockPricesByTickerBetweenDates(@PathVariable("symbol") String symbol,
                                                    @RequestParam("startDate") String startDate,
                                                   @RequestParam("endDate") String endDate) {
        logger.info("Get request for " + symbol + " stock prices between " + startDate + " and " + endDate);
        return service.getPriceByTickerAndDate(symbol, startDate, endDate);
    }

//    @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
//    public void addCD(@RequestBody CompactDisc disc) {
//        logger.info("Post request");
//        service.addToCatalog(disc);
//    }
//
//    @RequestMapping(method = RequestMethod.PUT, consumes = "application/json", path="/{id}")
//    public void updateCD(@RequestBody CompactDisc disc, @PathVariable("id") Integer id) {
//        logger.info("Put request for CD with id " + id);
//        service.updateInCatalog(disc, id);
//    }
//
//    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
//    public void deleteCD(@PathVariable("id") Integer id) {
//        logger.info("Delete request for CD with id " + id);
//        service.deleteFromCatalog(id);
//    }
}