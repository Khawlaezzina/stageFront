import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolutionTechnicienComponent } from './add-solution-technicien.component';

describe('AddSolutionTechnicienComponent', () => {
  let component: AddSolutionTechnicienComponent;
  let fixture: ComponentFixture<AddSolutionTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSolutionTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSolutionTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
