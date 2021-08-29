import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererApprobateursComponent } from './gerer-approbateurs.component';

describe('GererApprobateursComponent', () => {
  let component: GererApprobateursComponent;
  let fixture: ComponentFixture<GererApprobateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererApprobateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererApprobateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
