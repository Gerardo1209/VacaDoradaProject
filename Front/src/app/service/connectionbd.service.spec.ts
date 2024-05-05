import { TestBed } from '@angular/core/testing';

import { ConnectionbdService } from './connectionbd.service';

describe('ConnectionbdService', () => {
  let service: ConnectionbdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionbdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
