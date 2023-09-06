import { Component, Input, inject } from '@angular/core';
import { Vote } from 'src/app/models/vote';
import { VoteService } from "../../../providers/vote.service";


@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {

  @Input() voteArrayHistory :Array<Vote> = [];

  voteService = inject(VoteService);

  votes: Vote[] = this.voteService.list();


  supprimer(val :number) {
    console.log(val)
    this.voteArrayHistory.splice(val, 1);
  }
}
