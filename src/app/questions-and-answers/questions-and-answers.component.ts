import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Question {
  question: string;
  answer: string;
}

interface Panel {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'questions-and-answers',
  templateUrl: './questions-and-answers.component.html',
  styleUrls: ['./questions-and-answers.component.css'],
})
export class QuestionsAndAnswersComponent {
  panels: Panel[] = [];
  questions: Question[] = [];

  addPanel(form: NgForm) {
    let newPanel = form.value;
    this.panels.push(newPanel);
    form.resetForm();
  }

  addQuestion(form: NgForm) {
    this.questions.push(form.value);
    form.resetForm();
  }
}
