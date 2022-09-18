import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  searching(value): void  {
     this.emitter.emit(value)
    }
}
