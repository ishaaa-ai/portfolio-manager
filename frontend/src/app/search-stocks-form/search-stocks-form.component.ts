import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-stocks-form',
  templateUrl: './search-stocks-form.component.html',
  styleUrls: ['./search-stocks-form.component.css']
})
export class SearchStocksFormComponent {
  @Input() data:any
  stock: string = ''
  action: string = ""
  actions: Array<String> = ["Buy", "Sell"]
  quantity: number = 0;

  handleStockEvent(evt:any) {
    // // set the status object based on received data from the child
    // this.statusObj = evt
    // // also store the paramters in our history array
    // this.searchHistory.push({category:this.category, num:this.num, ts:this.statusObj.timestamp})
  }

}
