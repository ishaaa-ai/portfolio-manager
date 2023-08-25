import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-net-worth',
  templateUrl: './net-worth.component.html',
  styleUrls: ['./net-worth.component.css']
})
export class NetWorthComponent {
  @Input() netWorth=0

}
