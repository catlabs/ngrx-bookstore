import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthorHttp } from '../models/http-models/author-http.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorService {

  authorsUrl = `${environment.apiUrl}authors.json`;

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<AuthorHttp> {
    return this._http.get<AuthorHttp>(this.authorsUrl);
  }
}
