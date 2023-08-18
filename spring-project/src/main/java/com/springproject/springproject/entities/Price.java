package com.springproject.springproject.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="price")
public class Price implements Serializable {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="stock_id")
    private int stockId;

    @ManyToOne(cascade={CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name="stock_id", referencedColumnName="id")
    private Stock stock;

    //may want to come back to this
//    @OneToMany(cascade={CascadeType.MERGE, CascadeType.PERSIST})
//    @JoinColumn(name="stock_id", referencedColumnName="id")
//    private List<Price> prices = new ArrayList<>();


    @Column(name="open_price")
    private double openPrice;
    @Column(name="close_price")
    private double closePrice;

    @Column(name="volume")
    private int volume;

    @Column(name="date")
    private String date;

    public Price(int id, int stockId, Stock stock, double openPrice, double closePrice, int volume, String date) {
        this.id = id;
        this.stockId = stockId;
        this.stock = stock;
        this.openPrice = openPrice;
        this.closePrice = closePrice;
        this.volume = volume;
        this.date = date;
    }

    public Price(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public double getOpenPrice() {
        return openPrice;
    }

    public void setOpenPrice(double openPrice) {
        this.openPrice = openPrice;
    }

    public double getClosePrice() {
        return closePrice;
    }

    public void setClosePrice(double closePrice) {
        this.closePrice = closePrice;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
