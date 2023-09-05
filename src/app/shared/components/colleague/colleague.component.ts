import {Component, Input} from '@angular/core';

@Component({
  selector: 'tc-colleague',
  templateUrl: './colleague.component.html',
  styleUrls: ['./colleague.component.scss']
})
export class ColleagueComponent {
  @Input() collegue ={
    pseudo: "Jean",
    score: -999,
    photo:"https://randomuser.me/api/portraits/men/22.jpg"
  }
}
