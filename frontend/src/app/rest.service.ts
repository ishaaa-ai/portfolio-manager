import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  stocksUrl = 'http://localhost:8080/api/stocks'

  constructor(private http:HttpClient) { }

  getAllStocks() {
    try {
      return this.http.get(this.stocksUrl)
    }
    catch (err) {
      return new Observable()
    }
  }
  
}
