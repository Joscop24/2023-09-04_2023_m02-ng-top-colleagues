import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  list(): Colleague[] {
    return [{
      pseudo: "Jean",
      score: 100,
      photo: "https://randomuser.me/api/portraits/men/22.jpg"
    },
      {
        pseudo: "Yves",
        score: 100,
        photo: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        pseudo: "Matthieu",
        score: 100,
        photo: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        pseudo: "Rossi",
        score: 100,
        photo: "https://randomuser.me/api/portraits/men/22.jpg"
      }];

  }
}

