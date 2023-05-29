import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyTypesComponent } from './study-types.component';

describe('StudyTypesComponent', () => {
  let component: StudyTypesComponent;
  let fixture: ComponentFixture<StudyTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
