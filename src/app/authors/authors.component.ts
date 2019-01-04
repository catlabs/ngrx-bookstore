import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAuthorList } from '../core/store/selectors/author.selector';
import { AppState } from '../core/store/state/app.state';
import { Router } from '@angular/router';
import { GetAuthors } from '../core/store/actions/author.actions';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors$ = this._store.pipe(select(selectAuthorList));

  constructor(private _store: Store<AppState>, private _router: Router) {
    this.authors$.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    this._store.dispatch(new GetAuthors());
  }

}
