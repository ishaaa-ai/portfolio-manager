import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-live-charting',
  templateUrl: './live-charting.component.html',
  styleUrls: ['./live-charting.component.css']
})
export class LiveChartingComponent implements OnInit {
  public chart: any;
  // @Input() startDate: string = ''
  // @Input() endDate: string = ''

  ngOnInit(): void {
    this.createChart();
  }

  constructor(private restService: RestService) { }

  graphChart(labels: Array<String>, data: Array<String>) {
    console.log(labels)
    console.log(data)
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: labels,
        datasets: [
          {
            label: "Net Worth",
            data: data,
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  createChart() {
    const startDate = "2021-09-01"
    const endDate = "2021-09-08"

    this.restService.getAllPortfolioStocks().subscribe((resp: any) => {
      const stockInfo: { [key: string]: number } = {};

      for (const item of resp) {
        const ticker = item.stock.symbol
        const volume = item.volume
        this.restService.getStockPricesByTickerBetweenDates(ticker, startDate, endDate).subscribe((priceResp: any) => {
          for (const row of priceResp) {
            const recordDate = row.recordDate
            const openPrice = row.openPrice
            if (stockInfo[recordDate]) {
              stockInfo[recordDate] += openPrice * volume;
            } else {
              stockInfo[recordDate] = openPrice * volume;
            }
          }
          const keysArray: string[] = Object.keys(stockInfo);
          const valuesArray: string[] = Object.values(stockInfo).map(num => num.toString());
          this.graphChart(keysArray, valuesArray)
        })

      }
    })
  }
}
