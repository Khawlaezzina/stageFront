import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSolutionUserComponent } from './recherche-solution-user.component';

describe('RechercheSolutionUserComponent', () => {
  let component: RechercheSolutionUserComponent;
  let fixture: ComponentFixture<RechercheSolutionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheSolutionUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSolutionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
