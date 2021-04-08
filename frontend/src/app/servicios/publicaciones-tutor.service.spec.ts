import { TestBed } from '@angular/core/testing';

import { PublicacionesTutorService } from './publicaciones-tutor.service';

describe('PublicacionesTutorService', () => {
  let service: PublicacionesTutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesTutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
