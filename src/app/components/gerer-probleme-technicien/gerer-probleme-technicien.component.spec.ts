import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProblemeTechnicienComponent } from './gerer-probleme-technicien.component';

describe('GererProblemeTechnicienComponent', () => {
  let component: GererProblemeTechnicienComponent;
  let fixture: ComponentFixture<GererProblemeTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererProblemeTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProblemeTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
