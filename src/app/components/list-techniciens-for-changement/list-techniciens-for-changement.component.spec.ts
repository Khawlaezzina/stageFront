import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensForChangementComponent } from './list-techniciens-for-changement.component';

describe('ListTechniciensForChangementComponent', () => {
  let component: ListTechniciensForChangementComponent;
  let fixture: ComponentFixture<ListTechniciensForChangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensForChangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensForChangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
