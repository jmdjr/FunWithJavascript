/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DecodersComponent } from './Decoders.component';

describe('DecodersComponent', () => {
  let component: DecodersComponent;
  let fixture: ComponentFixture<DecodersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecodersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
