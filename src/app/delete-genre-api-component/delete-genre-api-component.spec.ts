import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGenreApiComponent } from './delete-genre-api-component';

describe('DeleteGenreApiComponent', () => {
  let component: DeleteGenreApiComponent;
  let fixture: ComponentFixture<DeleteGenreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteGenreApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteGenreApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
