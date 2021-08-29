import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensByDepartementForProblemComponent } from './list-techniciens-by-departement-for-problem.component';

describe('ListTechniciensByDepartementForProblemComponent', () => {
  let component: ListTechniciensByDepartementForProblemComponent;
  let fixture: ComponentFixture<ListTechniciensByDepartementForProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensByDepartementForProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensByDepartementForProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
