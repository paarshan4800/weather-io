import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input() report: any;
  @Input() fullReport: any;
  @Input() hourly: Array<Object>;
  @Input() daily: Array<Object>;
  isCelcius: boolean;
  isFahrenheit: boolean = true;
  isHourly = true;

  constructor(private _api: ApiService) {

  }

  ngOnInit(): void {
    this.isCelcius = true;

  }

  toggleUnit() {
    this.isCelcius = !this.isCelcius;
  }



}
