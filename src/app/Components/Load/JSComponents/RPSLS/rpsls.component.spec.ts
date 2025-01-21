/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RpslsComponent } from './rpsls.component';

describe('RpslsComponent', () => {
  let component: RpslsComponent;
  let fixture: ComponentFixture<RpslsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpslsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpslsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
