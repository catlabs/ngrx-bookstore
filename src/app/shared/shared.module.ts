import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class SharedModule { }
