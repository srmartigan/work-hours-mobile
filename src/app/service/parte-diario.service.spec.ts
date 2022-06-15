import { TestBed } from '@angular/core/testing';

import { ParteDiarioService } from './parte-diario.service';

describe('ParteDiarioService', () => {
  let service: ParteDiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParteDiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
