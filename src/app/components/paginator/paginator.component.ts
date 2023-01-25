import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent implements OnInit {

  @Input() itemsPerPage: number = 0;

  @Input() page: number = 0;

  @Input() totalItems: number = 0;

  @Input() hasUnlimitedItems: boolean = false;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  get hasNextPage(): boolean {
    return this.hasUnlimitedItems || (this.page + 1) * this.itemsPerPage < this.totalItems;
  }

  get hasPreviousPage(): boolean {
    return this.page > 0;
  }

  nextPage(): void {
    if (this.hasNextPage) {
      this.pageChanged.emit(this.page + 1);
    }
  }

  previousPage(): void {
    if (this.page) {
      this.pageChanged.emit(this.page - 1);
    }
  }

}
