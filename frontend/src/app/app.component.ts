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
  constructor(private rest:RestService){}

  ngOnInit() {
    this.rest.getAllPortfolios()
      .subscribe( this.handleAllPortfolios() )

    this.rest.getAllPrices()
    .subscribe( this.handleAllPrices() )
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
  // these are the propeties of this class
  // title = 'portfolio-manager';
  // here is a portfolio array
  //get from our api?
  // methods of this class
  // here is a method to handle a custom event from a child component


}
