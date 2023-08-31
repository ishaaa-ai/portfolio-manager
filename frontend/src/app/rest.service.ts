import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  serverURL = environment.ANGULAR_APP_SERVER_URL;

  // basic urls for the backend APIs
  portfoliosUrl = this.serverURL + '/api/portfolio'
  pricesUrl = this.serverURL + '/api/stock'
  pricePerDateUrl = this.serverURL + '/api/stock/ticker'
  netWorthUrl = this.serverURL + '/api/portfolio/total'
  stocksUrl = this.serverURL + '/api/stocks'

  constructor(private http: HttpClient) { }

  getAllStocks() {
    try {
      return this.http.get(this.stocksUrl)
    }
    catch (err) {
      return new Observable()
    }
  }

  // return a object from requested URLs containing all portfolio information
  getRestAllPortfolios() {
    try {
      return this.http.get(this.portfoliosUrl)
    }
    catch (err) {
      return new Observable()
    }
  }
  
  // retrieve one stock json information between two dates as an object and return it
  getRestOnePrice(whichStock='AMZN', startDate='2021-04-01', endDate='2021-04-01'){
    const oneStockUrl = `${this.pricePerDateUrl}/${whichStock}/dates?endDate=${endDate}T00%3A00%3A00&startDate=${startDate}T00%3A00%3A00`
    try{
      return this.http.get(oneStockUrl)
      
    }
    catch(err){
      return new Observable()
    }
  }
  
  // retrieve one price change number between two dates as an object and return it 
  getRestPriceChange(whichStock='AMZN', startDate='2021-04-01'){
    const pChangeUrl = `${this.pricePerDateUrl}/${whichStock}/changeToday?date=${startDate}T00%3A00%3A00`
    try{
      return this.http.get(pChangeUrl)
      
    }
    catch(err){
      return new Observable()
    }
  }
  // retrieve one networth number between two dates as an object and return it
  getRestNetWorth(startDate='2021-04-01') {
    const getNetWorthUrl = `${this.netWorthUrl}?date=${startDate}T00%3A00%3A00`;
    try{
      return this.http.get(getNetWorthUrl)
    }
    catch(err){
      return new Observable()
    }
  }


  getPortfolioStockByTicker(ticker: string) {
    const portfolioStockByTickerUrl = this.serverURL + `/api/portfolio/${ticker}`
    return this.http.get(portfolioStockByTickerUrl).pipe(
      catchError(this.handleError)
    );
  }

  getStockPercentChangeToday(ticker:string, startDate: string) {
    const getStockPercentChangeToday = this.serverURL + `/api/stock/ticker/${ticker}/changeToday?date=${startDate}T00%3A00%3A00`
    return this.http.get(getStockPercentChangeToday).pipe(
      catchError(this.handleError)
    );
  }


  addNewStockInPortfolio(ticker: string, volume: number) {
    const addNewStockInPortfolioUrl = this.serverURL + `/api/portfolio/ticker/${ticker}?volume=${volume}`
    return this.http.post(addNewStockInPortfolioUrl, {}).pipe(
      catchError(this.handleError)
    );
  }

  updateStockInPortfolio(ticker: string, new_volume: number) {
    const updateStockInPortfolioUrl = this.serverURL + `/api/portfolio/ticker/${ticker}?volume=${new_volume}`
    return this.http.put(updateStockInPortfolioUrl, {}).pipe(
      catchError(this.handleError)
    );
  }

  deleteStockFromPortfolio(ticker: string) {
    const deleteStockFromPortfolioUrl = this.serverURL + `/api/portfolio/ticker/${ticker}`
    return this.http.delete(deleteStockFromPortfolioUrl).pipe(
      catchError(this.handleError)
    );
  }

  getAllPortfolioStocks() {
    const porfolioStocksUrl = this.serverURL + `/api/portfolio`
    return this.http.get(porfolioStocksUrl).pipe(
      catchError(this.handleError)
    );
  }

  getStockPricesByTickerBetweenDates(ticker: string, startDate: string, endDate: string) {
    const getStockPricesByTickerBetweenDatesUrl = this.serverURL + `/api/stock/ticker/${ticker}/dates?startDate=${startDate}T00%3A00%3A00&endDate=${endDate}T00%3A00%3A00`
    return this.http.get(getStockPricesByTickerBetweenDatesUrl).pipe(
      catchError(this.handleError)
    );
  }

  // method to handle any http errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
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
