import { TestBed } from '@angular/core/testing';

import { MiddleGuard } from './middle.guard';

describe('MiddleGuard', () => {
  let guard: MiddleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MiddleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
