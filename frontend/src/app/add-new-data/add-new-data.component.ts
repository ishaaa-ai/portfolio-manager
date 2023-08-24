import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-new-data',
  templateUrl: './add-new-data.component.html',
  styleUrls: ['./add-new-data.component.css']
})
export class AddNewDataComponent {
  @Input() data:any
}
