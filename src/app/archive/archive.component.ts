import { Component } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
})
export class ArchiveComponent {
  archives: any = [
    { year: 2023, month: 1 },
    { year: 2023, month: 2 },
    { year: 2023, month: 3 },
  ];
}
