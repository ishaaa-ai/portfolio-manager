import { Component } from '@angular/core';
import { RestService } from './rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'portfolio-frontend';
  // stocks = [];
  portfolio = [];
  price = [];
  onePrice = []
  constructor(private rest:RestService){}
  whichStock='AMZN'
  startDate='2021-04-01'
  endDate='2021-04-01'
  ngOnInit() {
    this.rest.getAllPortfolios()
      .subscribe( this.handleAllPortfolios() )

    this.rest.getAllPrices()
    .subscribe( this.handleAllPrices() )

    this.getOne()
  }

  handleAllPortfolios(){
    return (received:any) => {
      this.portfolio = received
    }
  }

  handleAllPrices(){
    return (received:any) => {
      this.price = received
    }
  }
  showOnePrice(){
    return (received:any)=>{
      console.log(this.onePrice)
      this.onePrice = received
    }
  }

  getOne(){
    // we call the typicode.getOnePhoto method
    this.rest.getOnePrice(this.whichStock, this.startDate, this.endDate)
    .subscribe(this.showOnePrice())
  }

//   getRowSum(qty, price) {
//     const sum = qty * price;
//     return isNaN(sum) ? '' : sum;
// }

}
