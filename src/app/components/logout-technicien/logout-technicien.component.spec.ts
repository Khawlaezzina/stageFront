import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutTechnicienComponent } from './logout-technicien.component';

describe('LogoutTechnicienComponent', () => {
  let component: LogoutTechnicienComponent;
  let fixture: ComponentFixture<LogoutTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
