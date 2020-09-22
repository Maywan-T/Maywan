import { TestBed } from '@angular/core/testing';

import { TabeService } from './tabe.service';

describe('TabeService', () => {
  let service: TabeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
