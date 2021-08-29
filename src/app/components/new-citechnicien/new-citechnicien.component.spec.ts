import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCITechnicienComponent } from './new-citechnicien.component';

describe('NewCITechnicienComponent', () => {
  let component: NewCITechnicienComponent;
  let fixture: ComponentFixture<NewCITechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCITechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCITechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
