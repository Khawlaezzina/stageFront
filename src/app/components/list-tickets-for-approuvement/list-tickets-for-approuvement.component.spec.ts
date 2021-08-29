import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTicketsForApprouvementComponent } from './list-tickets-for-approuvement.component';

describe('ListTicketsForApprouvementComponent', () => {
  let component: ListTicketsForApprouvementComponent;
  let fixture: ComponentFixture<ListTicketsForApprouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTicketsForApprouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTicketsForApprouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
