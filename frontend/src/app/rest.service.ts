import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  portfoliosUrl = 'http://localhost:8080/api/portfolio'
  pricesUrl = 'http://localhost:8080/api/stock'
  pricePerDateUrl = 'http://localhost:8080/api/stock/ticker'
  netWorthUrl = 'http://localhost:8080/api/portfolio/total'

  stocksUrl = 'http://localhost:8080/api/stocks'

  constructor(private http: HttpClient) { }

  getAllStocks() {
    try {
      return this.http.get(this.stocksUrl)
    }
    catch (err) {
      return new Observable()
    }
  }

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

  getNetWorth(startDate='2021-04-01') {
    const getNetWorthUrl = `${this.netWorthUrl}?date=${startDate}T00%3A00%3A00`;
    try{
      console.log(getNetWorthUrl)
      return this.http.get(getNetWorthUrl)
    }
    catch(err){
      return new Observable()
    }
  }


  getPortfolioStockByTicker(ticker: string) {
    const portfolioStockByTickerUrl = `http://localhost:8080/api/portfolio/${ticker}`
    return this.http.get(portfolioStockByTickerUrl).pipe(
      catchError(this.handleError)
    );
  }

  addNewStockInPortfolio(ticker: string, volume: number) {
    const addNewStockInPortfolioUrl = `http://localhost:8080/api/portfolio/ticker/${ticker}?volume=${volume}`
    return this.http.post(addNewStockInPortfolioUrl, {}).pipe(
      catchError(this.handleError)
    );
  }

  updateStockInPortfolio(ticker: string, new_volume: number) {
    const updateStockInPortfolioUrl = `http://localhost:8080/api/portfolio/ticker/${ticker}?volume=${new_volume}`
    return this.http.put(updateStockInPortfolioUrl, {}).pipe(
      catchError(this.handleError)
    );
  }

  deleteStockFromPortfolio(ticker: string) {
    const deleteStockFromPortfolioUrl = `http://localhost:8080/api/portfolio/ticker/${ticker}`
    return this.http.delete(deleteStockFromPortfolioUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAllPortfolioStocks() {
    const porfolioStocksUrl = `http://localhost:8080/api/portfolio`
    return this.http.get(porfolioStocksUrl).pipe(
      catchError(this.handleError)
    );
  }

  getStockPricesByTickerBetweenDates(ticker: string, startDate: string, endDate: string) {
    const getStockPricesByTickerBetweenDatesUrl = `http://localhost:8080/api/stock/ticker/${ticker}/dates?startDate=${startDate}T00%3A00%3A00&endDate=${endDate}T00%3A00%3A00`
    return this.http.get(getStockPricesByTickerBetweenDatesUrl).pipe(
      catchError(this.handleError)
    );
  }

  // method to handle any http errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something unexpected happened');
  };

}
