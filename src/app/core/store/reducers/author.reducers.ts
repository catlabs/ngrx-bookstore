import { AuthorActionType } from './../actions/author.actions';
import { AuthorActions } from '../actions/author.actions';
import { initialAuthorState, AuthorState } from '../state/author.state';

export const authorReducers = (
  state = initialAuthorState,
  action: AuthorActions
): AuthorState => {
  switch (action.type) {
    case AuthorActionType.GetAuthorsSuccess: {
      return {
        ...state,
        authors: action.payload
      };
    }
    case AuthorActionType.GetAuthorSuccess: {
      return {
        ...state,
        selectedAuthor: action.payload
      };
    }

    default:
      return state;
  }
};
