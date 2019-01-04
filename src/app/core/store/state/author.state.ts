import { Author } from '../../models/author.interface';

export interface AuthorState {
  authors: Author[];
  selectedAuthor: Author;
}

export const initialAuthorState: AuthorState = {
  authors: null,
  selectedAuthor: null
};
