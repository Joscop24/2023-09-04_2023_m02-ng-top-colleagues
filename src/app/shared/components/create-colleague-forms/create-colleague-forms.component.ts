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
    photo: "https://ucarecdn.com/c65e1532-fbdd-4c23-8f2b-e03f99af9759/-/crop/900x900/403,0/-/preview/-/progressive/yes/-/format/auto/"
  };

  errorReturned: string = "";

  constructor(private colleagueService: ColleagueService) {
  }

  onSubmitForm(creationColleagueForm: NgForm) {
    console.log(this.creationColleague);
    this.colleagueService
      .publier(this.creationColleague)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          this.errorReturned = e
        },
        complete: () => {
          console.info('complete')
          creationColleagueForm.reset();
        }
      })
  }

}
