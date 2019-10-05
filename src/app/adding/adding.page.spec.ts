import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPage } from './adding.page';

describe('AddingPage', () => {
  let component: AddingPage;
  let fixture: ComponentFixture<AddingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
