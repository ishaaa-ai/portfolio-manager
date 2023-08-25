import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private rest:RestService){}
  @Input() portfolio:any
  @Input() price:any
  @Input() onePrice:any
  @Input() startDate:any
  @Input() netWorth:any
  @Output() onClick = new EventEmitter();

  totalPrice:any

  getRowSum(volume:any, price:any) {
    this.totalPrice = volume * price;
}
}
