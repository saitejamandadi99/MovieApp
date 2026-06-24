import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginApiComponent } from './login-api-component';

describe('LoginApiComponent', () => {
  let component: LoginApiComponent;
  let fixture: ComponentFixture<LoginApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginApiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
