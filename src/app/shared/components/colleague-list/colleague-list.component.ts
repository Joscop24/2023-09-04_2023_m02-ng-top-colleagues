import { Component } from '@angular/core';
import {Colleague} from "../../../models/colleague";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleaguesArray: Array<Colleague> = [{
    pseudo: "Jean",
    score: 100,
    photo:"https://randomuser.me/api/portraits/men/22.jpg"
  },
    {
      pseudo: "Jean",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      pseudo: "Jean",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      pseudo: "Jean",
      score: 100,
      photo:"https://randomuser.me/api/portraits/men/22.jpg"
    }]
}
