import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  constructor() { }

  ngOnInit(): void {
  }

}
