package com.springproject.springproject.rest;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Price;
import com.springproject.springproject.service.PortfolioService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/portfolio")
public class PortfolioController {

    @Autowired
    private PortfolioService service;
    private static Logger logger = LogManager.getLogger(PriceController.class);
    @RequestMapping(method = RequestMethod.GET)
    public List<PortfolioStock> findAll() {
        logger.info("Get request for findAll");
        return (List<PortfolioStock>) service.getPortfolioStock();
    }

    @RequestMapping(method = RequestMethod.GET, path="/{symbol}")
    public ResponseEntity<PortfolioStock> findVolumeByStock(@PathVariable("symbol") String symbol) {
        logger.info("Get request for stock prices with symbol " + symbol);
        return service.getPortfolioStockByTicker(symbol);
    }

    @RequestMapping(method = RequestMethod.POST, path="/{id}")
    public void addStock(@PathVariable("id") Integer id, @RequestParam("volume") Integer volume) {
        logger.info("Post request");
        service.addByStockId(id, volume);
    }

    @RequestMapping(method = RequestMethod.POST, path="/ticker/{symbol}")
    public void addStockByTicker(@PathVariable("symbol") String symbol, @RequestParam("volume") Integer volume) {
        logger.info("Post request");
        service.addByStockTicker(symbol, volume);
    }
//
    @RequestMapping(method = RequestMethod.PUT, path="/ticker/{symbol}")
    public ResponseEntity<PortfolioStock> updateStockByTicker(@PathVariable("symbol") String symbol,
                                                              @RequestParam("volume") Integer volume) {
        logger.info("Put request for stock with ticker " + symbol);
        return service.updateByStockTicker(symbol, volume);
    }
//
    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
    public void deleteStock(@PathVariable("id") Integer id) {
        logger.info("Delete request for stock with id " + id);
        service.deleteByStockId(id);
    }

    @RequestMapping(method = RequestMethod.DELETE, path="/ticker/{symbol}")
    public void deleteStockByTicker(@PathVariable("symbol") String symbol) {
        logger.info("Delete request for stock with ticker " + symbol);
        service.deleteByStockTicker(symbol);
    }

}