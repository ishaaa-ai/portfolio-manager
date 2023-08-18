package com.springproject.springproject.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="portfolio")
public class PortfolioStock implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;


    @Column(name="stock_id")
    private int stockId;

    @ManyToOne(cascade={CascadeType.MERGE, CascadeType.PERSIST})
    @JoinColumn(name="stock_id", referencedColumnName="id")
    private Stock stock;

    @Column(name="volume")
    private int volume;

    public PortfolioStock(){

    }

    public PortfolioStock(int id, int stockId, Stock stock, int volume) {
        this.id = id;
        this.stockId = stockId;
        this.stock = stock;
        this.volume = volume;
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

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }
}
