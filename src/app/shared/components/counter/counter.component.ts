import { Component } from '@angular/core';
import {VoteService} from "../../../providers/vote.service";


@Component({
  selector: 'tc-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterLike:number = 0;
  counterHate:number = 0;

  constructor(private countSrv:VoteService) {
    countSrv.countLike()
      .subscribe(() => this.counterLike++);

    countSrv.countHate()
      .subscribe(()=> this.counterHate++);
  }
}
