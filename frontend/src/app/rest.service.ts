import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  portfoliosUrl = 'http://localhost:8080/api/portfolio'
  pricesUrl = 'http://localhost:8080/api/stock'
  pricePerDateUrl = 'http://localhost:8080/api/stock/ticker'
// AMZN/dates?endDate=2021-04-07T00%3A00%3A00&startDate=2021-04-01T00%3A00%3A00
  constructor(private http:HttpClient) { }

  getAllPortfolios() {
    try {
      return this.http.get(this.portfoliosUrl)
    }
    catch (err) {
      return new Observable()
    }
  }
  getAllPrices() {
    try {
      return this.http.get(this.pricesUrl)
    }
    catch (err) {
      return new Observable()
    }
  }
  
  // get just one photo
  getOnePrice(whichStock='AMZN', startDate='2021-04-01', endDate='2021-04-01'){
    const oneStockUrl = `${this.pricePerDateUrl}/${whichStock}/dates?endDate=${endDate}T00%3A00%3A00&startDate=${startDate}T00%3A00%3A00`
    try{
      // this no need as this variable is not declared in class
      console.log(oneStockUrl)
      return this.http.get(oneStockUrl)
      
    }
    catch(err){
      return new Observable()
    }
  }

}
