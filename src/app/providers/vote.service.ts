import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  list(): Vote[] {
    return [
      {
        colleague: {
          pseudo: "None",
          score: 100,
          photo: "none"
        },
        vote: LikeHate.LIKE
      },
      {
        colleague: {
          pseudo: "Nobody likes me",
          score: -500,
          photo: "none"
        },
        vote: LikeHate.HATE
      }
    ]
  }
}
