import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInTechnicienComponent } from './sign-in-technicien.component';

describe('SignInTechnicienComponent', () => {
  let component: SignInTechnicienComponent;
  let fixture: ComponentFixture<SignInTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
