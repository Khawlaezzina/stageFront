import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouvrirCatalogueUserComponent } from './decouvrir-catalogue-user.component';

describe('DecouvrirCatalogueUserComponent', () => {
  let component: DecouvrirCatalogueUserComponent;
  let fixture: ComponentFixture<DecouvrirCatalogueUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecouvrirCatalogueUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecouvrirCatalogueUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
