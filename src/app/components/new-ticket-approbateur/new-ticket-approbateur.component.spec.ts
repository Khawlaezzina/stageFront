import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketApprobateurComponent } from './new-ticket-approbateur.component';

describe('NewTicketApprobateurComponent', () => {
  let component: NewTicketApprobateurComponent;
  let fixture: ComponentFixture<NewTicketApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTicketApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
