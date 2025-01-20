import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Fun from './Decoders';

@Component({
  selector: 'app-Decoders',
  templateUrl: './Decoders.component.html',
  styleUrls: ['./Decoders.component.css']
})
export class DecodersComponent implements OnInit, AfterViewInit {

  fun = Fun;

  @ViewChild("key") Key;

  constructor() { }

  ngAfterViewInit(): void {
    this.Key;
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.fun.Decoders.init();
  }

  setCryption(element) {
    this.fun.Decoders.SetCryption(element);
  }

  decode() {
    this.fun.Decoders.Decode();
  }

  setState(state: string) {
    this.fun.Decoders.SetState(state);
  }

  encode() {
    this.fun.Decoders.Encode();
  }

  updateKey(element) {
    this.fun.Decoders.UpdateKey(element);
  }
}
