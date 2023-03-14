import { Component, Input } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
})
export class WrapperComponent {
  @Input('title') title: string | undefined;
  @Input('subtitle') subtitle: string | undefined;
}
