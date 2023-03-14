import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  showPosts = false;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    if (input.value === '') return;

    let post: any = {
      title: input.value,
      body: `Post Counts: ${this.posts.length}.`,
    };
    this.posts.unshift(post);

    input.value = '';

    this.service.create(post).subscribe({
      next: (newPost: any) => {
        post.id = newPost.id;
      },
      error: (error: AppError) => {
        this.posts.shift(post);

        if (error instanceof BadInputError) {
          // this.form.setErrors(error.originalError)

          alert('Bad input');
        } else throw error; // This line re-throw an error, so our AppErrorHandler can cath it, otherwise, error will not occur if it's not instance of BadInputError.
      },
    });
  }

  updatePost(post: any) {
    let index = this.posts.indexOf(post);

    let patchedPost = { id: post.id, title: 'updated' };
    let updatedPost = { ...post, title: 'Updated' };
    this.posts.splice(index, 1, updatedPost);

    this.service.update(patchedPost).subscribe({
      next: (res) => {
        this.posts.splice(index, 1, updatedPost);
      },
      error: (error: AppError) => {
        this.posts.splice(index, 1, post);

        throw error;
      },
    });
  }

  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: undefined,
      error: (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
        else throw error; // This line re-throw an error, so our AppErrorHandler can cath it, otherwise, error will not occur if it's not instance of NotFoundError.
      },
    });
  }
}
