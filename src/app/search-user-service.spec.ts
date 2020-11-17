import { TestBed } from '@angular/core/testing';

import { SearchUserService } from '/searchuser-service.ts';

describe('SearchUserService', () => {
  let service: SearchUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
