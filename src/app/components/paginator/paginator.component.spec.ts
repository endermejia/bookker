import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a pageChanged event emitter', () => {
    expect(component.pageChanged).toBeTruthy();
  });

  it('should have a pageChanged event emitter that emits a number', () => {
    spyOn(component.pageChanged, 'emit');
    component.pageChanged.emit(1);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(1);
  });

  it('nextPage should be true', () => {
    component.page = 0;
    component.itemsPerPage = 10;
    component.totalItems = 20;
    expect(component.hasNextPage).toBeTruthy();
  });

  it('nextPage should be false', () => {
    component.page = 1;
    component.itemsPerPage = 10;
    component.totalItems = 20;
    expect(component.hasNextPage).toBeFalsy();
  });

  it('previousPage should be true', () => {
    component.page = 1;
    expect(component.hasPreviousPage).toBeTruthy();
  });

  it('previousPage should be false', () => {
    component.page = 0;
    expect(component.hasPreviousPage).toBeFalsy();
  });

});
