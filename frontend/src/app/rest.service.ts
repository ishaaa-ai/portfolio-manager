import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  portfoliosUrl = 'http://localhost:8080/api/portfolio'
  pricesUrl = 'http://localhost:8080/api/stock'

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
  
}
