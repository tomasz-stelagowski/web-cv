import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cv-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @Input() startDate : string;
  @Input() endDate : string;

  constructor() { }

  isNow(date: string){
    return date == 'now';
  }

  ngOnInit() {
  }

}
