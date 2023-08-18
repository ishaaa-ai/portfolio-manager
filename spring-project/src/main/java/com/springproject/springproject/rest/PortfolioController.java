package com.springproject.springproject.rest;

import com.springproject.springproject.entities.PortfolioStock;
import com.springproject.springproject.entities.Price;
import com.springproject.springproject.service.PortfolioService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
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

    @RequestMapping(method = RequestMethod.GET, path="/{id}")
    public Integer findVolumeByStock(@PathVariable("id") Integer id) {
        logger.info("Get request for stock prices with id " + id);
        return service.getPortfolioStockByStockId(id).getVolume();
    }

    @RequestMapping(method = RequestMethod.POST, path="/{id}")
    public void addStock(@PathVariable("id") Integer id, @RequestParam("volume") Integer volume) {
        logger.info("Post request");
        service.addByStockId(id, volume);
    }
//
//    @RequestMapping(method = RequestMethod.PUT, consumes = "application/json", path="/{id}")
//    public void updateCD(@RequestBody CompactDisc disc, @PathVariable("id") Integer id) {
//        logger.info("Put request for CD with id " + id);
//        service.updateInCatalog(disc, id);
//    }
//
    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
    public void deleteStock(@PathVariable("id") Integer id) {
        logger.info("Delete request for stock with id " + id);
        service.deleteByStockId(id);
    }

}