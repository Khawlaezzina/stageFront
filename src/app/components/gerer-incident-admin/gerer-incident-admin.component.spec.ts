import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererIncidentAdminComponent } from './gerer-incident-admin.component';

describe('GererIncidentAdminComponent', () => {
  let component: GererIncidentAdminComponent;
  let fixture: ComponentFixture<GererIncidentAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererIncidentAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererIncidentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
