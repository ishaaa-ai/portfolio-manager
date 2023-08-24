import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-frontend';
  stocks = [];

  constructor(private rest:RestService){}

  ngOnInit() {
    this.rest.getAllStocks()
      .subscribe( this.handleAllStocks() )
  }

  handleAllStocks(){
    return (received:any) => {
      this.stocks = received
    }
  }
}
