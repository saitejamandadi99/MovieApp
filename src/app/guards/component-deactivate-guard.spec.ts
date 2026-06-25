import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { componentDeactivateGuard } from './component-deactivate-guard';

describe('componentDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) =>
    TestBed.runInInjectionContext(() => componentDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
