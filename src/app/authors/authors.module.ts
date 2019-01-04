import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsRoutingModule } from './authors-routing.module';
import { AuthorsComponent } from './authors.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  declarations: [AuthorsComponent, AuthorsListComponent, AuthorDetailsComponent],
  imports: [
    CommonModule,
    AuthorsRoutingModule
  ]
})
export class AuthorsModule { }
