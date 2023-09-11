import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Colleague} from "../../../models/colleague";
import { Vote } from 'src/app/models/vote';
import { ColleagueService} from "../../../providers/colleague.service";

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {

  @Output() likeOrHateEvent:EventEmitter<Vote> = new EventEmitter<Vote>;

  colleagueService = inject(ColleagueService);

  colleagues: Colleague[] = [];

  constructor(private colleguesSrv:ColleagueService) {
    this.colleguesSrv.changeColleagues().subscribe(tabcoll => this.colleagues = tabcoll);
  }



  updateVote(val :Vote){
    console.log("Dans colleague list : ",val);
    this.likeOrHateEvent.emit(val);
  }
}
