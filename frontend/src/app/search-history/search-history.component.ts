import { Component, Input } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent {
  @Input() searchHistory:Array<any> = []

}
