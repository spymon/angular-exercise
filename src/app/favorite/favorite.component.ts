import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  @Input('is-favorite') isSelected: boolean = false;
  @Input('post') post: any;
  @Output() toggle = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.toggle.emit({ post: this.post, newValue: this.isSelected });
  }
}
