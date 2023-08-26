import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-live-charting',
  templateUrl: './live-charting.component.html',
  styleUrls: ['./live-charting.component.css']
})
export class LiveChartingComponent implements OnInit {
  public chart: any;
  @Input() startDate: string = ''
  @Input() endDate: string = ''
  @Input() portfolio: any
  @Output() onClick = new EventEmitter<Object>()

  ngOnInit(): void {
    const startDate = "2021-12-08"
    const endDate = "2021-12-28"
    this.createChart()
    this.graphChart(startDate, endDate);
  }

  constructor(private restService: RestService) { }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: [],
        datasets: [
          {
            label: "Net Worth",
            data: [],
            backgroundColor: 'black'
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
      }
    });
  }

  updateChartData(chart: Chart, labels: Array<string>, data: Array<number>) {
    chart.data.labels = labels
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
    });
    chart.update();
  }

  graphChart(startDate: string, endDate: string) {

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
          let keysArray = Object.keys(stockInfo).map(date => date.split('T')[0]);;
          let valuesArray = Object.values(stockInfo);
          this.updateChartData(this.chart, keysArray, valuesArray)
        })
      }
    })
  }
}
