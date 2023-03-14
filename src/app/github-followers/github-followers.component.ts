import { ActivatedRoute } from '@angular/router';
import { GithubFollowerService } from './../services/github-follower.service';
import { Component, OnInit } from '@angular/core';
import { combineLatest, switchMap } from 'rxjs';
@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  constructor(
    private service: GithubFollowerService,
    private route: ActivatedRoute
  ) {}

  followers: any;

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        switchMap((combined) => {
          let id = combined[0].get('id');
          let username = combined[0].get('username');
          let order = combined[1].get('order');
          let page = combined[1].get('page');

          // this.service.getAll({id, order, page, username}) - Example of how CombineLatest would work
          return this.service.getAll();
        })
      )
      .subscribe((followers) => (this.followers = followers));
  }
}
