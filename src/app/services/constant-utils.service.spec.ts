import { TestBed } from '@angular/core/testing';

import { ConstantUtilsService } from './constant-utils.service';

describe('ConstantUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstantUtilsService = TestBed.get(ConstantUtilsService);
    expect(service).toBeTruthy();
  });
});
