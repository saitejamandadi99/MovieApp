import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoviesComponent } from './view-movies-component';

describe('ViewMoviesComponent', () => {
  let component: ViewMoviesComponent;
  let fixture: ComponentFixture<ViewMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMoviesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMoviesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
