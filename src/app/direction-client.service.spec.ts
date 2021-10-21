import { TestBed } from '@angular/core/testing';

import { DirectionClientService } from './direction-client.service';

describe('DirectionClientService', () => {
  let service: DirectionClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectionClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
