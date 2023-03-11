import { Component, Input } from '@angular/core';

@Component({
  selector: 'twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css'],
})
export class TwitterLikeComponent {
  @Input() likesCount: number | undefined;
  @Input() isActive: boolean | undefined;

  onLikeClick(): void {
    if (this.likesCount === undefined) return;

    this.likesCount += this.isActive ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
