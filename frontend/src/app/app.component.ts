import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  startDate='2021-04-01'
  netWorth=0
  ngOnInit() {
    this.getPortfolio()

    this.getNetWorth()

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
    this.getPortfolio();
    this.getNetWorth();
  }
  

  handleAllPortfolios(){
    return (received:any) => {
      this.portfolio = received
      this.getPrices();
      this.getAllPriceChanges();
    }
  }

  handleNetWorth(){
    return (received:any) => {
      this.netWorth = received
    }
  }

  handleAllPrices(){
    return (received:any) => {
      this.price = received
    }
  }

  // loop through portfolio array and for each object
  // get one json object according to dates
  // set profolio price change
  getPrices(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.handleShowClosePrice(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  // enable back end get one price 
  // and invoke function to the portfolio
  handleShowClosePrice(ticker:any, i:any){
    this.rest.getRestOnePrice(ticker, this.startDate, this.startDate)
    .subscribe(this.setProfolioClosePrice(i))
  }

  setProfolioClosePrice(i:any){
    return (received:any)=>{
      this.portfolio[i]['closePrice'] = received[0]['closePrice'];
    }
  }

  getAllPriceChanges(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.getOnePriceChange(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  getPortfolio(){
    this.rest.getRestAllPortfolios()
    .subscribe( this.handleAllPortfolios() )
  }

  

  showOnePriceChange(i:any){
    return (received:any)=>{
      console.log(received)
      this.portfolio[i]['priceChange'] = received;
      console.log(this.portfolio)
    }
  }


  getOnePriceChange(ticker:any, i:any){
    // we call the typicode.getOnePhoto method
    console.log(ticker)
    this.rest.getRestPriceChange(ticker, this.startDate, '2021-04-06')
    .subscribe(this.showOnePriceChange(i))
  }

  

  getNetWorth() {
    this.rest.getRestNetWorth(this.startDate).subscribe(this.handleNetWorth())
  }

  

  
  

  

  updatePrice(e:any){
    this.startDate = e;
    this.getPrices();
    this.getNetWorth();
    this.getAllPriceChanges();
  }

}
