import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererTechniciensComponent } from './gerer-techniciens.component';

describe('GererTechniciensComponent', () => {
  let component: GererTechniciensComponent;
  let fixture: ComponentFixture<GererTechniciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererTechniciensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererTechniciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
