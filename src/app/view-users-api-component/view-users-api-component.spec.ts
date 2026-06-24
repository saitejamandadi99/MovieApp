import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUsersApiComponent } from './view-users-api-component';

describe('ViewUsersApiComponent', () => {
  let component: ViewUsersApiComponent;
  let fixture: ComponentFixture<ViewUsersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUsersApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewUsersApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
