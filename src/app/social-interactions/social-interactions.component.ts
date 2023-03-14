import { Component } from '@angular/core';

@Component({
  selector: 'app-social-interactions',
  templateUrl: './social-interactions.component.html',
  styleUrls: ['./social-interactions.component.css'],
})
export class SocialInteractionsComponent {
  posts = [
    {
      id: 1,
      title: 'I like food',
      isFavorite: true,
    },
    {
      id: 2,
      title: 'How to use Angular?',
      isFavorite: false,
    },
  ];

  twitterPosts = [
    {
      id: 1,
      isLiked: false,
      title: 'Cool tweet',
      likesCount: 16,
    },
    {
      id: 2,
      isLiked: false,
      title: 'Even cooler tweet',
      likesCount: 122,
    },
    {
      id: 3,
      isLiked: true,
      title: 'The coolest tweet',
      likesCount: 1034,
    },
  ];

  Like({ post, newValue }: { newValue: boolean; post: any }) {
    let index = this.posts.indexOf(post);
    this.posts[index].isFavorite = newValue;
  }
}
