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

    this.rest.getAllPrices()
    .subscribe( this.handleAllPrices() )

    this.rest.getAllStocks()
      .subscribe( this.handleAllStocks() )
  }

  handleAllStocks(){
    return (received:any) => {
      this.stocks = received
    }
  }

  handleStockUpdate(e:any) {
    console.log(e)
    this.getPortfolio();
    this.getNetWorth();
  }

  getPortfolio(){
    this.rest.getAllPortfolios()
    .subscribe( this.handleAllPortfolios() )
  }

  handleNetWorth(){
    return (received:any) => {
      this.netWorth = received
    }
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
    this.rest.getPriceChange(ticker, this.startDate, '2021-04-06')
    .subscribe(this.showOnePriceChange(i))
  }

  getAllPriceChanges(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.getOnePriceChange(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  getNetWorth() {
    this.rest.getNetWorth(this.startDate).subscribe(this.handleNetWorth())
  }

  handleAllPortfolios(){
    return (received:any) => {
      this.portfolio = received
      this.getPrices();
      this.getAllPriceChanges();
    }
  }

  getPrices(){
    for (let i = 0; i < this.portfolio.length; i++) {
      console.log(`i: ${i}`)
      this.getOne(this.portfolio[i]['stock']['symbol'], i);
    }
  }

  handleAllPrices(){
    return (received:any) => {
      this.price = received
    }
  }
  showOnePrice(i:any){
    return (received:any)=>{
      console.log(received)
      this.portfolio[i]['closePrice'] = received[0]['closePrice'];
      console.log(this.portfolio)
    }
  }

  getOne(ticker:any, i:any){
    // we call the typicode.getOnePhoto method
    console.log(ticker)
    this.rest.getOnePrice(ticker, this.startDate, this.startDate)
    .subscribe(this.showOnePrice(i))
  }

  updatePrice(e:any){
    this.startDate = e;
    this.getPrices();
    this.getNetWorth();
    this.getAllPriceChanges();
  }

}
