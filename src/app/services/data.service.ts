import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  favorites: number[] = [];

  constructor() {
    this.favorites = this.getFavorites();
  }

  getFavorites(): number[] {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  setFavorites(favorites: number[]): void {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  toggleFavorite(item: number): void {
    if (this.isFavorite(item)) {
      this.favorites = this.favorites.filter(favorite => favorite !== item);
    } else {
      this.favorites.push(item);
    }
    this.setFavorites(this.favorites);
  }

  isFavorite(item: number): boolean {
    return this.favorites.includes(item);
  }


}
