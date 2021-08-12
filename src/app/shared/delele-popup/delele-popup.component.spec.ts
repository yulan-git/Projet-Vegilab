import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelelePopupComponent } from './delele-popup.component';

describe('DelelePopupComponent', () => {
  let component: DelelePopupComponent;
  let fixture: ComponentFixture<DelelePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelelePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelelePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
