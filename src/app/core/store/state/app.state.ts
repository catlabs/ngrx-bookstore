import { RouterReducerState } from '@ngrx/router-store';

import { AuthorState, initialAuthorState } from './author.state';


export interface AppState {
  /* router?: RouterReducerState; */
  authors: AuthorState;
}

export const initialAppState: AppState = {
  authors: initialAuthorState
};

export function getInitialState(): AppState {
  return initialAppState;
}
