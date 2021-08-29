import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInApprobateurComponent } from './sign-in-approbateur.component';

describe('SignInApprobateurComponent', () => {
  let component: SignInApprobateurComponent;
  let fixture: ComponentFixture<SignInApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
