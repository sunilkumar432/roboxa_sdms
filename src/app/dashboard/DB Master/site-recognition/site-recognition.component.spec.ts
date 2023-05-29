import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteRecognitionComponent } from './site-recognition.component';

describe('SiteRecognitionComponent', () => {
  let component: SiteRecognitionComponent;
  let fixture: ComponentFixture<SiteRecognitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteRecognitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
