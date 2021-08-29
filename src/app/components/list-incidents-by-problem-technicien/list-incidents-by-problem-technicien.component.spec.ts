import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentsByProblemTechnicienComponent } from './list-incidents-by-problem-technicien.component';

describe('ListIncidentsByProblemTechnicienComponent', () => {
  let component: ListIncidentsByProblemTechnicienComponent;
  let fixture: ComponentFixture<ListIncidentsByProblemTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIncidentsByProblemTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidentsByProblemTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
