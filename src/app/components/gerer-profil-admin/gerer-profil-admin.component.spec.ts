import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererProfilAdminComponent } from './gerer-profil-admin.component';

describe('GererProfilAdminComponent', () => {
  let component: GererProfilAdminComponent;
  let fixture: ComponentFixture<GererProfilAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererProfilAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererProfilAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
