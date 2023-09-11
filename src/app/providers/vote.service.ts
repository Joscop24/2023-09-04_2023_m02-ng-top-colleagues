import { Injectable } from '@angular/core';
import {Vote} from "../models/vote";
import {LikeHate} from "../models/like-hate";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ColleagueService} from "./colleague.service";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  private action = new Subject<Vote>();

  constructor(private http: HttpClient, private collSrv:ColleagueService) {

    this.http.get<Vote[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/votes')
      .subscribe(
        (voteArray) => {
          for (let vote of voteArray) {
            console.log(vote);

            this.action.next(vote)
          }
        }
      );

  }

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

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

  get abonner() {
    return this.action.asObservable();
  }
}
