import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIncidentBeforeApprouvementComponent } from './update-incident-before-approuvement.component';

describe('UpdateIncidentBeforeApprouvementComponent', () => {
  let component: UpdateIncidentBeforeApprouvementComponent;
  let fixture: ComponentFixture<UpdateIncidentBeforeApprouvementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIncidentBeforeApprouvementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIncidentBeforeApprouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
