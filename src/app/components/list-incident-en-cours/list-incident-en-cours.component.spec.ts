import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIncidentEnCoursComponent } from './list-incident-en-cours.component';

describe('ListIncidentEnCoursComponent', () => {
  let component: ListIncidentEnCoursComponent;
  let fixture: ComponentFixture<ListIncidentEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIncidentEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIncidentEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
