import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAuthorList } from 'src/app/core/store/selectors/author.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { Router } from '@angular/router';
import { GetAuthors } from 'src/app/core/store/actions/author.actions';
import { Observable, Subscription } from 'rxjs';
import { Author } from 'src/app/core/models/author.interface';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit, OnDestroy {

  authors$ = this._store.pipe(select(selectAuthorList));
  authorsSubscriber: Subscription;

  constructor(private _store: Store<AppState>, private _router: Router) {
    this.authorsSubscriber = this.authors$.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    this._store.dispatch(new GetAuthors());
  }

  ngOnDestroy() {
    this.authorsSubscriber.unsubscribe();
  }

}
