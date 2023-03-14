import { Component } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'new-course-form-with-form-builder',
  templateUrl: './new-course-form-with-form-builder.component.html',
  styleUrls: ['./new-course-form-with-form-builder.component.css'],
})
export class NewCourseFormWithFormBuilderComponent {
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  form;

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeTopic(topicId: number) {
    this.topics.removeAt(topicId);
  }
}
