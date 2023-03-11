import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  constructor(private service: GithubFollowerService) {}

  followers: any;

  ngOnInit() {
    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
