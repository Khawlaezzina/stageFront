import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutApprobateurComponent } from './logout-approbateur.component';

describe('LogoutApprobateurComponent', () => {
  let component: LogoutApprobateurComponent;
  let fixture: ComponentFixture<LogoutApprobateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutApprobateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutApprobateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
