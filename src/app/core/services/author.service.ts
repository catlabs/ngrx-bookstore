import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author.interface';

@Injectable()
export class AuthorService {

  authorsUrl = `${environment.apiUrl}authors`;

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this._http.get<Author[]>(this.authorsUrl);
  }
}
