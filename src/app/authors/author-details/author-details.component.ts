import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/state/app.state';
import { selectSelectedAuthor } from 'src/app/core/store/selectors/author.selector';
import { GetAuthor } from 'src/app/core/store/actions/author.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  author$ = this._store.pipe(select(selectSelectedAuthor));

  constructor(private _store: Store<AppState>, private _route: ActivatedRoute) {
    this.author$.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
    this._store.dispatch(new GetAuthor(this._route.snapshot.params.id));
  }

}
