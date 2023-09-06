import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent,
    ColleagueListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
