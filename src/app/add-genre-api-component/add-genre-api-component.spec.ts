import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGenreApiComponent } from './add-genre-api-component';

describe('AddGenreApiComponent', () => {
  let component: AddGenreApiComponent;
  let fixture: ComponentFixture<AddGenreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGenreApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGenreApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
