import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrLicenseTypeComponent } from './cr-license-type.component';

describe('CrLicenseTypeComponent', () => {
  let component: CrLicenseTypeComponent;
  let fixture: ComponentFixture<CrLicenseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrLicenseTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrLicenseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
