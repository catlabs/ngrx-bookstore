import { NgModule } from '@angular/core';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthorsComponent, AuthorsListComponent, AuthorDetailsComponent],
  imports: [
    AuthorsRoutingModule,
    SharedModule
  ]
})
export class AuthorsModule { }
