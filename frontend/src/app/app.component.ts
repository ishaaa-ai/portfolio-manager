import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // handleAll functions return a object with what received
  // get functions set all specific values to the table
  // enable functions call rest functions to obtain API result
  // set functions set one value to the table
  title = 'portfolio-frontend';
  stocks = [];
  portfolio:any[] = [];
  //[
//   {
//     "id": 4,
//     "stock": {
//       "id": 1,
//       "symbol": "AMZN",
//       "name": "Amazon.com, Inc"
//     },
//     "volume": 20
//   },
//   {
//     "id": 6,
//     "stock": {
//       "id": 3,
//       "symbol": "DOW",
//       "name": "Dow Inc"
//     },
//     "volume": 50
//   }
// ]
  price = [];
  onePrice = [{'closePrice':0}]
  constructor(private rest:RestService){}
  startDate='2021-12-28'
  netWorth=0

  searchHistory: Array<any> = []
  showHistory:boolean = false

  ngOnInit() {
    this.getAllPortfolio()

    this.getAllNetWorth()

    this.rest.getAllStocks()
      .subscribe( this.handleAllStocks() )
  }
  // load valueS to stocks object
  handleAllStocks(){
    return (received:any) => {
      this.stocks = received
    }
  }

  // made portfolio object update after buying selling stocks
  handleStockUpdate(e:any) {
    console.log(e)
    this.getAllPortfolio();
    this.getAllNetWorth();
  }
  
  // set portfolio close price
  // set portfolio price change
  handleAllPortfolios(){
    return (received:any) => {
      this.portfolio = received
      this.getAllPrices();
      this.getAllPriceChanges();
    }
  }
  // return networth object
  handleAllNetWorth(){
    return (received:any) => {
      this.netWorth = received
    }
  }
  // return price object
  handleAllPrices(){
    return (received:any) => {
      this.price = received
    }
  }

  setProfolioClosePrice(i:any){
    return (received:any)=>{
      this.portfolio[i]['closePrice'] = received[0]['closePrice'];
    }
  }

  // enable back end get one price 
  // and invoke function to the portfolio
  enableOneClosePrice(ticker:any, i:any){
    this.rest.getRestOnePrice(ticker, this.startDate, this.startDate)
    .subscribe(this.setProfolioClosePrice(i))
  }

  // loop through portfolio array and for each object
  // get one json object according to dates
  // set profolio close price
  getAllPrices(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.enableOneClosePrice(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  
  setPortfolioPriceChange(i:any){
      return (received:any)=>{
        this.portfolio[i]['priceChange'] = received;
      }
    }

  // enable pricechange value to portfolio i index 
  enableOnePriceChange(ticker:any, i:any){
    this.rest.getRestPriceChange(ticker, this.startDate)
    .subscribe(this.setPortfolioPriceChange(i))
  }

  // loop through portfolio array and for each object
  // get one json object according to dates
  // set profolio price change
  getAllPriceChanges(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.enableOnePriceChange(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  // obtain portfolio
  getAllPortfolio(){
    this.rest.getRestAllPortfolios()
    .subscribe( this.handleAllPortfolios() )
  }

  
  // set networth values to portfolio table 
  getAllNetWorth() {
    this.rest.getRestNetWorth(this.startDate).subscribe(this.handleAllNetWorth())
  }
  
  
  // update table when new input 
  updatePrice(e:any){
    this.startDate = e;
    this.getAllPrices();
    this.getAllNetWorth();
    this.getAllPriceChanges();
  }
}
