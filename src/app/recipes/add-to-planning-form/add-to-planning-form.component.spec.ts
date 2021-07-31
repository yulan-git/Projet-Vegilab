import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToPlanningFormComponent } from './add-to-planning-form.component';

describe('AddToPlanningFormComponent', () => {
  let component: AddToPlanningFormComponent;
  let fixture: ComponentFixture<AddToPlanningFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToPlanningFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToPlanningFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
