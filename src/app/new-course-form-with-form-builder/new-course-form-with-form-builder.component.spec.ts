import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormWithFormBuilderComponent } from './new-course-form-with-form-builder.component';

describe('NewCourseFormWithFormBuilderComponent', () => {
  let component: NewCourseFormWithFormBuilderComponent;
  let fixture: ComponentFixture<NewCourseFormWithFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormWithFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCourseFormWithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
