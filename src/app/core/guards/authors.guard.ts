import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import { selectAuthorList } from '../store/selectors/author.selector';
import { map, tap, filter, take, switchMap } from 'rxjs/operators';
import { GetAuthors } from '../store/actions/author.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthorsGuard implements CanActivate {
  constructor(private _store: Store<AppState>) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this._store.pipe(
      select(selectAuthorList),
      tap((authors: any) => {
        if (!authors) {
          this._store.dispatch(new GetAuthors());
        }
      }),
      filter((authors: any) => authors),
      take(1),
      switchMap(() => of(true))
    );
  }
}
