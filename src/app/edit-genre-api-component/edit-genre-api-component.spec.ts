import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGenreApiComponent } from './edit-genre-api-component';

describe('EditGenreApiComponent', () => {
  let component: EditGenreApiComponent;
  let fixture: ComponentFixture<EditGenreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGenreApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditGenreApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
