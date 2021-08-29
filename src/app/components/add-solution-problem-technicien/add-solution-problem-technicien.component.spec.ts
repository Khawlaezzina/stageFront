import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionProblemTechnicienComponent } from './add-solution-problem-technicien.component';

describe('AddSolutionProblemTechnicienComponent', () => {
  let component: AddSolutionProblemTechnicienComponent;
  let fixture: ComponentFixture<AddSolutionProblemTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolutionProblemTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolutionProblemTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
