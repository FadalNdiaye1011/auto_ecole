import { TestBed } from '@angular/core/testing';

import { PanneauServiceService } from './panneau.service';

describe('PanneauServiceService', () => {
  let service: PanneauServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanneauServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
