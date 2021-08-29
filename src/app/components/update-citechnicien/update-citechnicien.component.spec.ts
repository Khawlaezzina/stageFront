import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCITechnicienComponent } from './update-citechnicien.component';

describe('UpdateCITechnicienComponent', () => {
  let component: UpdateCITechnicienComponent;
  let fixture: ComponentFixture<UpdateCITechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCITechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCITechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
