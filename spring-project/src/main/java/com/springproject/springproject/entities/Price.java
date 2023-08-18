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

    @ManyToOne(cascade={CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name="stock_id", referencedColumnName="id")
    private Stock stock;

    @Column(name="open_price")
    private double openPrice;
    @Column(name="close_price")
    private double closePrice;

    @Column(name="volume")
    private int volume;

    @Column(name="record_date")
    private String record_date;

    public Price(int id, Stock stock, double openPrice, double closePrice, int volume, String record_date) {
        this.id = id;
        this.stock = stock;
        this.openPrice = openPrice;
        this.closePrice = closePrice;
        this.volume = volume;
        this.record_date = record_date;
    }

    public Price(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getRecord_date() {
        return record_date;
    }

    public void setRecord_date(String record_date) {
        this.record_date = record_date;
    }
}
