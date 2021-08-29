import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererConfigurationAdminComponent } from './gerer-configuration-admin.component';

describe('GererConfigurationAdminComponent', () => {
  let component: GererConfigurationAdminComponent;
  let fixture: ComponentFixture<GererConfigurationAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererConfigurationAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererConfigurationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
