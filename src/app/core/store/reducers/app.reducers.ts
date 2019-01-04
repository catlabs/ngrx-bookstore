import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { authorReducers } from './author.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  /* router: routerReducer, */
  authors: authorReducers
};
