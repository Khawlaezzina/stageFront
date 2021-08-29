import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensForServiceByDepartementComponent } from './list-techniciens-for-service-by-departement.component';

describe('ListTechniciensForServiceByDepartementComponent', () => {
  let component: ListTechniciensForServiceByDepartementComponent;
  let fixture: ComponentFixture<ListTechniciensForServiceByDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensForServiceByDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensForServiceByDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
