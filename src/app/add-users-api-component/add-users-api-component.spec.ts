import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersApiComponent } from './add-users-api-component';

describe('AddUsersApiComponent', () => {
  let component: AddUsersApiComponent;
  let fixture: ComponentFixture<AddUsersApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUsersApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddUsersApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
