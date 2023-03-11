import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h2>courses</h2>`,
})
export class CoursesComponent {
  email: string = 'me@examiple.com';

  onKeyUp() {
    console.log(this.email);
  }
}
