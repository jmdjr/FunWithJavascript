import { Component, OnInit } from '@angular/core';

import Fun from "./old/rpsls"

@Component({
  selector: 'app-rpsls',
  templateUrl: './rpsls.component.html',
  styleUrls: ['./rpsls.component.css']
})
export class RpslsComponent implements OnInit {

  fun = Fun;
  
  constructor() { }

  ngOnInit() {
  }

}
