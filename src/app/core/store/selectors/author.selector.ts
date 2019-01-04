import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { AuthorState } from '../state/author.state';

const selectAuthors = (state: AppState) => state.authors;

export const selectAuthorList = createSelector(
  selectAuthors,
  (state: AuthorState) => state.authors
);

export const selectSelectedAuthor = createSelector(
  selectAuthors,
  (state: AuthorState) => state.selectedAuthor
);
