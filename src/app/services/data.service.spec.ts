import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getFavorites should return an empty array', () => {
    service.favorites = [];
    service.setFavorites([]);
    expect(service.getFavorites()).toEqual([]);  });

  it('setFavorites should set the favorites', () => {
    service.favorites = [];
    service.setFavorites([1, 2, 3]);
    expect(service.getFavorites()).toEqual([1, 2, 3]);
  });

  it('toggleFavorite should add an item to the favorites', () => {
    service.favorites = [];
    service.setFavorites([]);
    service.toggleFavorite(1);
    expect(service.getFavorites()).toEqual([1]);
  });

  it('toggleFavorite should remove an item from the favorites', () => {
    service.favorites = [];
    service.setFavorites([]);
    service.toggleFavorite(1);
    service.toggleFavorite(1);
    expect(service.getFavorites()).toEqual([]);
  });

  it('isFavorite should return true', () => {
    service.favorites = [];
    service.setFavorites([]);
    service.toggleFavorite(1);
    expect(service.isFavorite(1)).toBeTruthy();
  });

});
