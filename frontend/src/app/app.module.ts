import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NetWorthComponent } from './net-worth/net-worth.component';
import { LiveChartingComponent } from './live-charting/live-charting.component';
import { HeadComponent } from './head/head.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SearchStocksFormComponent } from './search-stocks-form/search-stocks-form.component';
import { SearchStocksComponent } from './search-stocks/search-stocks.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { TopListComponent } from './top-list/top-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    NetWorthComponent,
    LiveChartingComponent,
    PortfolioComponent,
    SearchStocksFormComponent,
    SearchStocksComponent,
    SearchHistoryComponent,
    TopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
