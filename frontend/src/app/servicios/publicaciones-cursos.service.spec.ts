import { TestBed } from '@angular/core/testing';

import { PublicacionesCursosService } from './publicaciones-cursos.service';

describe('PublicacionesCursosService', () => {
  let service: PublicacionesCursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesCursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
