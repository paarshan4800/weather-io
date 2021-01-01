import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  @Input() report;
  @Input() isFahrenheit;
  isCelcius: boolean;
  
  constructor() { }

  ngOnInit(): void {
    this.isCelcius = true;
  }

  toggleUnit() {
    this.isCelcius = !this.isCelcius;

  }

}
