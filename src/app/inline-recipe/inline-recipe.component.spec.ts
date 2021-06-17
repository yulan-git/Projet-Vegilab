import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineRecipeComponent } from './inline-recipe.component';

describe('InlineRecipeComponent', () => {
  let component: InlineRecipeComponent;
  let fixture: ComponentFixture<InlineRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
