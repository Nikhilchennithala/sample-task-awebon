import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  value = "";

  constructor() { }

  ngOnInit() {
  }
  send(value){
    this.value = value;
  }
}
