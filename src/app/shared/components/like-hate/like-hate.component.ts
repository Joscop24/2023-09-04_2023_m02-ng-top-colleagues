import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import {VoteService} from "../../../providers/vote.service";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
  styleUrls: ['./like-hate.component.scss']
})
export class LikeHateComponent {
  @Input() likeButtonDisabled = false;
  @Input() hateButtonDisabled = false;

  @Output() likeHateEmiter = new EventEmitter<LikeHate>();

  constructor(private buttonSrv:VoteService) {
  }
like() {
  this.likeHateEmiter.emit(LikeHate.LIKE);
  this.buttonSrv.clickLike(LikeHate.LIKE);
 }

  hate() {
    this.likeHateEmiter.emit(LikeHate.HATE);
    this.buttonSrv.clickHate(LikeHate.HATE);
  }

}
