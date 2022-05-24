import { TestBed } from '@angular/core/testing';

import { HorariosRestService } from './horarios-rest.service';

describe('HorariosRestService', () => {
  let service: HorariosRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorariosRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
