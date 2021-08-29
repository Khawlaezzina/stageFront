import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensForServiceComponent } from './list-techniciens-for-service.component';

describe('ListTechniciensForServiceComponent', () => {
  let component: ListTechniciensForServiceComponent;
  let fixture: ComponentFixture<ListTechniciensForServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensForServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensForServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
