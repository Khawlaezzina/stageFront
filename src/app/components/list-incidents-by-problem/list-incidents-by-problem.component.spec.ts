import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentsByProblemComponent } from './list-incidents-by-problem.component';

describe('ListIncidentsByProblemComponent', () => {
  let component: ListIncidentsByProblemComponent;
  let fixture: ComponentFixture<ListIncidentsByProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIncidentsByProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidentsByProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
