import { TestBed } from '@angular/core/testing';

import { CientificaService } from './cientifica.service';

describe('CientificaService', () => {
  let service: CientificaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CientificaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
