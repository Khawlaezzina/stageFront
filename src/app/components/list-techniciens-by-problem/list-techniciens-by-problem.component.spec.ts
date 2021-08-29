import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechniciensByProblemComponent } from './list-techniciens-by-problem.component';

describe('ListTechniciensByProblemComponent', () => {
  let component: ListTechniciensByProblemComponent;
  let fixture: ComponentFixture<ListTechniciensByProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechniciensByProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechniciensByProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
