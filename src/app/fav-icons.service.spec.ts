import { TestBed } from '@angular/core/testing';

import { FavIconsService } from './fav-icons.service';

describe('FavIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavIconsService = TestBed.get(FavIconsService);
    expect(service).toBeTruthy();
  });
});
