import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent implements OnInit {

  actualPage = 0;
  itemsPerPage = 12;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  get items(): number[] {
    const start = this.actualPage * this.itemsPerPage;
    return this.dataService.favorites
      .sort((a, b) => a - b)
      .slice(start, start + this.itemsPerPage);
  }

  pageChanged(event: number): void {
    this.actualPage = event;
  }

}
