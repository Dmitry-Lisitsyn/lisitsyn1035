import { TestBed } from '@angular/core/testing';

import { MitemService } from './mitem.service';

describe('MitemService', () => {
  let service: MitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
