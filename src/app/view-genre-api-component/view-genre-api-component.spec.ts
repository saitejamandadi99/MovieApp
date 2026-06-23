import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenreApiComponent } from './view-genre-api-component';

describe('ViewGenreApiComponent', () => {
  let component: ViewGenreApiComponent;
  let fixture: ComponentFixture<ViewGenreApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGenreApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGenreApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
