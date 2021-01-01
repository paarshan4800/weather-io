import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {
  @Input() report;
  @Input() daily: Array<Object>;
  @Input() isFahrenheit;
  @Input() locationDetails;
  isHourly: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
