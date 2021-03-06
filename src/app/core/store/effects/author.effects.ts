import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';

import { AppState } from '../state/app.state';
import {
  GetAuthorsSuccess,
  AuthorActionType,
  GetAuthorSuccess,
  GetAuthor,
  GetAuthors
} from '../actions/author.actions';
import { AuthorService } from '../../services/author.service';
import { selectAuthorList } from '../selectors/author.selector';
import { Author } from '../../models/author.interface';

@Injectable()
export class AuthorEffects {
  @Effect()
  getAuthor$ = this._actions$.pipe(
    ofType<GetAuthor>(AuthorActionType.GetAuthor),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectAuthorList))),
    switchMap(([id, authors]) => {
      const selectedAuthor = authors.filter(author => author.id === +id)[0];
      return of(new GetAuthorSuccess(selectedAuthor));
    })
  );

  @Effect()
  getAuthors$ = this._actions$.pipe(
    ofType<GetAuthors>(AuthorActionType.GetAuthors),
    withLatestFrom(this._store),
    switchMap(([action, state]) => {
      if (!state.authors.authors) {
        return this._authorService.getAuthors();
      } else {
        return of(state.authors.authors);
      }
    }),
    switchMap((authors: Author[]) => of(new GetAuthorsSuccess(authors)))
  );

  constructor(
    private _authorService: AuthorService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) { }
}
