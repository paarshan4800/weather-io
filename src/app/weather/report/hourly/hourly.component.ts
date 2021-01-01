import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  @Input() report;
  @Input() hourly: Array<Object>;
  @Input() isFahrenheit;
  isHourly: boolean = true;

  customCollapsedHeight: string = "*";
  customExpandedHeight: string = "*";

  constructor() { }

  ngOnInit(): void {
  }

}
