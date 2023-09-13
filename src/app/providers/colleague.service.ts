import { Injectable } from '@angular/core';
import {Colleague} from "../models/colleague";

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Subject, tap} from "rxjs";

import { CreateColleague} from "../models/create-colleague";

@Injectable({
  providedIn: 'root'
})
export class ColleagueService {
  constructor(private http:HttpClient) {
    this.callApi()
  }

  private subjectVote = new Subject<Colleague[]>();

  changeColleagues(){
    return this.subjectVote.asObservable();
  }

  callApi() {
    this.http.get<Colleague[]>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues').subscribe(
      (data:Colleague[]) => {
        this.subjectVote.next(data)
      })
  }

  publier(creationColleague: CreateColleague) {
    creationColleague.photo = "https://ucarecdn.com/c65e1532-fbdd-4c23-8f2b-e03f99af9759/-/crop/900x900/403,0/-/preview/-/progressive/yes/-/format/auto/";
    return this.http.post<Colleague>(
      'https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues',
      {
        pseudo: creationColleague.pseudo,
        first: creationColleague.first,
        last: creationColleague.last,
        photo: creationColleague.photo,
      },
      {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }
    ).pipe(
      tap((colleague) => this.subjectVote.next([colleague]))
    )
  }

}

