import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Subject} from "rxjs";

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
  private subjectNbLike = new Subject<LikeHate>;
  private subjectNbHate = new Subject<LikeHate>;

  countLike(){
    return this.subjectNbLike.asObservable();
  }
  countHate(){
    return this.subjectNbHate.asObservable();
  }

  clickLike(data:LikeHate){
    this.subjectNbLike.next(data)
  }

  clickHate(data:LikeHate){
    this.subjectNbHate.next(data)
  }

}
