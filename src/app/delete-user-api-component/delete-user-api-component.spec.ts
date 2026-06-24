import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserApiComponent } from './delete-user-api-component';

describe('DeleteUserApiComponent', () => {
  let component: DeleteUserApiComponent;
  let fixture: ComponentFixture<DeleteUserApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteUserApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteUserApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
