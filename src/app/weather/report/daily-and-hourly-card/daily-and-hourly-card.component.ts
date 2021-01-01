import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-and-hourly-card',
  templateUrl: './daily-and-hourly-card.component.html',
  styleUrls: ['./daily-and-hourly-card.component.css'],
  host: {
    "(window:resize)": "onWindowResize($event)"
  }
})
export class DailyAndHourlyCardComponent implements OnInit {
  @Input() report;
  @Input() value: Array<Object>;
  @Input() isFahrenheit;
  @Input() locationDetails;
  @Input() isHourly;

  mobileWidth: number = 468;
  xsmobileWidth: number = 350;
  width: number = window.innerWidth;
  height: number = window.innerHeight;
  isMobile: boolean;
  isXsMobile: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
    this.isXsMobile = this.width < this.xsmobileWidth;
  }


}
