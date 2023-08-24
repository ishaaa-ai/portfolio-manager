import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search-stocks',
  templateUrl: './search-stocks.component.html',
  styleUrls: ['./search-stocks.component.css']
})
export class SearchStocksComponent implements OnInit {

  @Input() selectedStock: string = ''
  @Input() selectedAction: string = ''
  @Input() selectedQuantity: number = 0
  @Input() disabled: boolean = true;
  @Output() STOCK_EVENT = new EventEmitter<Object>()
  outputMessage = "";

  constructor(private restService: RestService) { }

  getStockData() {
    console.log(this.selectedStock)
    console.log(this.selectedAction)
    console.log(this.selectedQuantity)

    if (this.selectedAction == "Sell") {
      this.selectedQuantity = -1 * this.selectedQuantity
    }

    // get by stock ticker to see the current volume
    // add selected quantity to it
    // if curr volume is 0 and you're trying to buy, add new stock in portfolio
    // if curr volume is 0, sell, do nothing, warn user
    // new volume = curr volume + selected quantity
    // if new volume <= 0 : sell  all of the existing quantity,, warn user, delete stock from portfolio
    // otherwise: set volume = new volume
    this.restService.getPortfolioStockByTicker(this.selectedStock).subscribe(
      (resp: any) => {
        const new_volume = resp.volume + this.selectedQuantity;
        if (new_volume <= 0) {
          this.restService.deleteStockFromPortfolio(this.selectedStock).subscribe(() => {})
          console.log("Deleted stock from portfolio")
          this.outputMessage = "Deleted stock from portfolio"
        } else {
          this.restService.updateStockInPortfolio(this.selectedStock, new_volume).subscribe(() => {})
          console.log("Updated stock from portfolio")
          this.outputMessage = "Updated stock from portfolio"
        }
      }, error => {
        // Stock doesn't exist in portfolio
        if (this.selectedAction == "Sell") {
          console.log("You can't sell, nothing changed in portfolio")
          this.outputMessage = "You can't sell, nothing changed in portfolio"
        } else if (this.selectedAction == "Buy") {
          this.restService.addNewStockInPortfolio(this.selectedStock, this.selectedQuantity).subscribe(()=>{})
          console.log("Added new stock in portfolio")
          this.outputMessage = "Added new stock in portfolio"
        }
      }
    )
  }

  ngOnInit() {
  }
}
