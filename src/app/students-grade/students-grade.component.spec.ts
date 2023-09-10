import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsGradeComponent } from './students-grade.component';

describe('StudentsGradeComponent', () => {
  let component: StudentsGradeComponent;
  let fixture: ComponentFixture<StudentsGradeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsGradeComponent]
    });
    fixture = TestBed.createComponent(StudentsGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
