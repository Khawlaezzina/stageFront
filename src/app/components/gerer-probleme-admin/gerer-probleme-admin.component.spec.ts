import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProblemeAdminComponent } from './gerer-probleme-admin.component';

describe('GererProblemeAdminComponent', () => {
  let component: GererProblemeAdminComponent;
  let fixture: ComponentFixture<GererProblemeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererProblemeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProblemeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
