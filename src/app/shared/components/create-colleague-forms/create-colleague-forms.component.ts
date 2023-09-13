import {Component} from '@angular/core';
import {CreateColleague} from "../../../models/create-colleague";
import {ColleagueService} from "../../../providers/colleague.service";
import { FormsModule} from "@angular/forms";
import { NgForm} from "@angular/forms";

@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {

  creationColleague: CreateColleague = {
    pseudo: "",
    first: "",
    last: "",
    photo: ""
  };

  errorReturned: string = "";

  constructor(private colleagueService: ColleagueService) {
  }

  onSubmitForm() {
    console.log(this.creationColleague);
    this.colleagueService
      .publier(this.creationColleague)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          console.error(e)
          this.errorReturned = e
        },
        complete: () => {
          console.info('complete')
          this.creationColleague = {
            pseudo: "",
            first: "",
            last: "",
            photo: ""
          }
        }
      })
  }

}
