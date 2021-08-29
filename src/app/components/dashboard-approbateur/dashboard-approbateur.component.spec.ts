import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApprobateurComponent } from './dashboard-approbateur.component';

describe('DashboardApprobateurComponent', () => {
  let component: DashboardApprobateurComponent;
  let fixture: ComponentFixture<DashboardApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
