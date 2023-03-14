import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.css'],
})
export class ArchivePageComponent implements OnInit {
  year: number | undefined;
  month: number | undefined;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let params = this.route.snapshot.paramMap;
    this.year = Number(params.get('year'));
    this.month = Number(params.get('month'));

    if (isNaN(this.month && this.year))
      this.router.navigate(['/404'], { skipLocationChange: true });
  }

  viewAll() {
    this.router.navigate(['/archive']);
  }
}
