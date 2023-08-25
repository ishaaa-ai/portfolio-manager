import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NetWorthComponent } from './net-worth/net-worth.component';
import { LiveChartingComponent } from './live-charting/live-charting.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SearchStocksFormComponent } from './search-stocks-form/search-stocks-form.component';
import { SearchStocksComponent } from './search-stocks/search-stocks.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    NetWorthComponent,
    LiveChartingComponent,
    PortfolioComponent,
    SearchStocksFormComponent,
    SearchStocksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
