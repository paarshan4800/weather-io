import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  form = this.formBuilder.group({
    email: [''],
    password: [''],
  });




  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }
  UserLoginSubmit() {

  }
}
