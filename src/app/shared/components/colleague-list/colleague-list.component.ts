import {Component, EventEmitter, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import { ScorePipe } from '../../pipes/score.pipe';
import { Vote } from 'src/app/models/vote';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  @Output() likeOrHateEvent:EventEmitter<Vote> = new EventEmitter<Vote>;
  colleaguesArray: Array<Colleague> = [{
    pseudo: "Jean",
    score: 100,
    photo:"https://randomuser.me/api/portraits/men/22.jpg"
  },
    {
      pseudo: "Yves",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      pseudo: "Matthieu",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      pseudo: "Rossi",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    }]

  updateVote(val :Vote){
    console.log("Dans colleague list : ",val);
    this.likeOrHateEvent.emit(val);
  }
}
