import {Component, Input, inject, OnInit} from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from "../../../providers/vote.service";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent implements OnInit {
  voteArrayHistory: Array<Vote> = [];
  subscription!: Subscription
  constructor(private voteService: VoteService) {}

  ngOnInit(): void {
    this.subscription != this.voteService.abonner
      .subscribe(vote => {
        this.voteArrayHistory.unshift(vote)
        console.log(vote);

      })
  }

  supprimer(val :number) {
    console.log(val)
  this.voteArrayHistory.splice(val, 1);
  }

}
