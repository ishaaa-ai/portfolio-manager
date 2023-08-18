package com.springproject.springproject.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

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
    private LocalDateTime recordDate;

    public Price(Stock stock, double openPrice, double closePrice, int volume, LocalDateTime recordDate) {
        this.stock = stock;
        this.openPrice = openPrice;
        this.closePrice = closePrice;
        this.volume = volume;
        this.recordDate = recordDate;
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

    public LocalDateTime getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(LocalDateTime recordDate) {
        this.recordDate = recordDate;
    }
}
