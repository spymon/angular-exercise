import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    // return throwError(() => new AppError());  /* Creating error scenario */

    return this.http
      .patch(this.url + resource.id, resource)
      .pipe(catchError(this.handleError));
  }

  delete(id: number) {
    // return throwError(() => new AppError());  /* Creating error scenario */

    return this.http.delete(this.url + id).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 400) return throwError(() => new BadInputError());

    if (error.status === 404) return throwError(() => new NotFoundError());

    return throwError(() => new AppError(error));
  }
}
