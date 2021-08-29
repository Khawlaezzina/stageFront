import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechnicienComponent } from './new-technicien.component';

describe('NewTechnicienComponent', () => {
  let component: NewTechnicienComponent;
  let fixture: ComponentFixture<NewTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
