import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AddNewDataComponent } from './add-new-data/add-new-data.component';
import { NetWorthComponent } from './net-worth/net-worth.component';
import { LiveChartingComponent } from './live-charting/live-charting.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    AddNewDataComponent,
    NetWorthComponent,
    LiveChartingComponent,
    PortfolioComponent
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
