import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRecipesListComponent } from './users-recipes-list.component';

describe('UsersRecipesListComponent', () => {
  let component: UsersRecipesListComponent;
  let fixture: ComponentFixture<UsersRecipesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersRecipesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRecipesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
