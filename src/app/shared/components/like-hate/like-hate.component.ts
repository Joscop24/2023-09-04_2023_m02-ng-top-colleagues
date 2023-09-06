import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Input() likeButtonDisabled = false;
  @Input() hateButtonDisabled = false;

  @Output() likeHateEmiter = new EventEmitter<LikeHate>();


like() {
  this.likeHateEmiter.emit(LikeHate.LIKE);
 }

  hate() {
    this.likeHateEmiter.emit(LikeHate.HATE);
  }

}
