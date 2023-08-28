import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {
  @Input() startDate: any
  @Input() gains: Array<any> = []
  @Input() losses: Array<any> = []
  @Output() onClick = new EventEmitter();

  constructor(private restService: RestService) { }
  ngOnInit(): void {
    this.getTopList("2021-12-28")
  }

  getTopList(startDate: string) {
    this.restService.getAllStocks().subscribe((resp: any) => {
      console.log(resp)
      const stockInfo: { [key: string]: any } = {};
      const requests = [];

      for (const item of resp) {
        const request = this.restService.getStockPercentChangeToday(item.symbol, startDate);
        requests.push(request);
        request.subscribe((percentResp) => {
          stockInfo[item.symbol] = percentResp;
        });
      }
      forkJoin(requests).subscribe(() => {
        const dataArray = Object.entries(stockInfo);
        dataArray.sort((a, b) => b[1] - a[1]); // Sorting in descending order
        this.gains = dataArray.slice(0, 3);
        this.losses = dataArray.slice(-3).reverse();
      });

    })
  }

  getPercentChangeColor(value: any) {
    if (value > 0) {
      return {
        color: 'green'
      };
    } else if (value < 0) {
      return {
        color: 'red'
      };
    } else {
      return {
        color: 'black'
      }
    }
  }
}
