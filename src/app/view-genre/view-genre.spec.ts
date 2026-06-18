import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGenre } from './view-genre';

describe('ViewGenre', () => {
  let component: ViewGenre;
  let fixture: ComponentFixture<ViewGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGenre],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewGenre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
