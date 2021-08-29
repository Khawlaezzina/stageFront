import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactTechnicienComponent } from './update-contact-technicien.component';

describe('UpdateContactTechnicienComponent', () => {
  let component: UpdateContactTechnicienComponent;
  let fixture: ComponentFixture<UpdateContactTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateContactTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
