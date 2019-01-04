import { Action } from '@ngrx/store';
import { Author } from '../../models/author.interface';

export enum AuthorActionType {
  GetAuthors = '[Author] Get Authors',
  GetAuthorsSuccess = '[Author] Get Authors Success',
  GetAuthor = '[Author] Get Author',
  GetAuthorSuccess = '[Author] Get Author Success'
}

export class GetAuthors implements Action {
  public readonly type = AuthorActionType.GetAuthors;
}

export class GetAuthorsSuccess implements Action {
  public readonly type = AuthorActionType.GetAuthorsSuccess;
  constructor(public payload: Author[]) {}
}

export class GetAuthor implements Action {
  public readonly type = AuthorActionType.GetAuthor;
  constructor(public payload: number) {}
}

export class GetAuthorSuccess implements Action {
  public readonly type = AuthorActionType.GetAuthorSuccess;
  constructor(public payload: Author) {}
}

export type AuthorActions = GetAuthors | GetAuthorsSuccess | GetAuthor | GetAuthorSuccess;
