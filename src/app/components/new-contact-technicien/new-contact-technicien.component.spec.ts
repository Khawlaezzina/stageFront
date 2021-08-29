import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContactTechnicienComponent } from './new-contact-technicien.component';

describe('NewContactTechnicienComponent', () => {
  let component: NewContactTechnicienComponent;
  let fixture: ComponentFixture<NewContactTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContactTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContactTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
