import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPhasesComponent } from './study-phases.component';

describe('StudyPhasesComponent', () => {
  let component: StudyPhasesComponent;
  let fixture: ComponentFixture<StudyPhasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyPhasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyPhasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
