import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensByDepartementComponent } from './list-techniciens-by-departement.component';

describe('ListTechniciensByDepartementComponent', () => {
  let component: ListTechniciensByDepartementComponent;
  let fixture: ComponentFixture<ListTechniciensByDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensByDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensByDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
