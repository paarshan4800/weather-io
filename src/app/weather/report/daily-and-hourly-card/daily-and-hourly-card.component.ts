import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-and-hourly-card',
  templateUrl: './daily-and-hourly-card.component.html',
  styleUrls: ['./daily-and-hourly-card.component.css']
})
export class DailyAndHourlyCardComponent implements OnInit {
  @Input() report;
  @Input() value: Array<Object>;
  @Input() isFahrenheit;
  @Input() locationDetails;
  @Input() isHourly;

  constructor() { }

  ngOnInit(): void {
  }


}
