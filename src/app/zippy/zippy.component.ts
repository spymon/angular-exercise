import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input() title: string | undefined;
  @Output() change = new EventEmitter();
  isActive: boolean = false;

  onClick(): void {
    this.isActive = !this.isActive;
    this.change.emit({ title: this.title, isOpen: this.isActive });
  }
}
