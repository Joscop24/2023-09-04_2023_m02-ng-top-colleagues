import {Component, Input} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import { Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague;

  likeButtonDisabled = false;
  hateButtonDisabled = false;
  updateScore(likeHate: LikeHate){
    switch (likeHate){
      case LikeHate.LIKE:
        this.colleague.score+=100;
        break;
      case LikeHate.HATE:
        this.colleague.score-=100;
    }
    this.likeHateDisableling()
  }

  likeHateDisableling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }

}
