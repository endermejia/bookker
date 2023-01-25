import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  actualPage = 0;
  itemsPerPage = 12;
  loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquam nisl, ' +
    'sit amet aliquam nisl nisl sed nisl. Donec euismod, nisl nec ' +
    'aliquam aliquam, nunc nisl aliquam nisl, sit amet aliquam nisl ' +
    'nisl sed nisl. Donec euismod, nisl nec aliquam aliquam, nunc nisl ';

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  get items(): number[] {
    const start = this.actualPage * this.itemsPerPage;
    return Array.from({length: this.itemsPerPage}, (_, i) => i + start);
  }

  getLoremIpsumByItem(item: number): string {
    const start = this.loremIpsum.length / this.itemsPerPage * item;
    const end = start + this.loremIpsum.length / this.itemsPerPage;
    return this.loremIpsum.substring(start, end);
  }

  pageChanged(event: number): void {
    this.actualPage = event;
  }

}
