import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserApiComponent } from './edit-user-api-component';

describe('EditUserApiComponent', () => {
  let component: EditUserApiComponent;
  let fixture: ComponentFixture<EditUserApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditUserApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
