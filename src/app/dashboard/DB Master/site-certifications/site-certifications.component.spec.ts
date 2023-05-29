import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCertificationsComponent } from './site-certifications.component';

describe('SiteCertificationsComponent', () => {
  let component: SiteCertificationsComponent;
  let fixture: ComponentFixture<SiteCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteCertificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
