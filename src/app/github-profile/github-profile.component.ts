import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubFollowerService } from '../services/github-follower.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(
    private service: GithubFollowerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      let username = params.get('username');
    });
  }

  viewAll() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}
