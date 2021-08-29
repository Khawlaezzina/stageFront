import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensByTicketComponent } from './list-techniciens-by-ticket.component';

describe('ListTechniciensByTicketComponent', () => {
  let component: ListTechniciensByTicketComponent;
  let fixture: ComponentFixture<ListTechniciensByTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensByTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensByTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
