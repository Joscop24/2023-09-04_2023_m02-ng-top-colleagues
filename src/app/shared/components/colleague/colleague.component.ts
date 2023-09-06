import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";
import { Colleague} from "../../../models/colleague";
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() colleague!: Colleague;

  @Output() likeOrHateEvent:EventEmitter<Vote> = new EventEmitter<Vote>;

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

    let vote: Vote = {
      colleague: this.colleague,
      vote: likeHate === LikeHate.LIKE ? LikeHate.LIKE : LikeHate.HATE
    };

    // Émettre l'événement
    this.likeOrHateEvent.emit(vote);

    this.likeHateDisableling()
    }

  likeHateDisableling() {
    this.likeButtonDisabled = this.colleague.score >= 1000;
    this.hateButtonDisabled = this.colleague.score <= -1000;
  }

}
