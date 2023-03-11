import { Component } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
})
export class AuthorsComponent {
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  title = 'Authors';
  authors;
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9788,
    students: 34123,
    price: 190.95,
    releaseDate: new Date(2023, 3, 13),
  };
  longText: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo veniam qui ratione sequi labore cupiditate ea a, deleniti quod incidunt doloribus voluptatum?';
}
