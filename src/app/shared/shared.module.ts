import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { ColleagueComponent } from './components/colleague/colleague.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    ColleagueComponent
  ],
  exports: [
    LikeHateComponent,
    ColleagueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
