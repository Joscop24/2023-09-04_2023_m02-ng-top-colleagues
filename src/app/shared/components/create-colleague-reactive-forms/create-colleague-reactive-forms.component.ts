import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, AsyncValidator, NgForm } from '@angular/forms';
import { Observable, map, catchError, of } from 'rxjs';
import { CreateColleague} from "../../../models/create-colleague";
import { ColleagueService } from 'src/app/providers/colleague.service';

@Component({
  selector: 'tc-create-colleague-reactive-forms',
  templateUrl: './create-colleague-reactive-forms.component.html',
  styleUrls: ['./create-colleague-reactive-forms.component.scss']
})
export class CreateColleagueReactiveFormsComponent {

  colleagueReactiveForm: FormGroup;
  errorReturned: string = "";

  creationColleague: CreateColleague = {
    pseudo: "",
    first: "",
    last: "",
    photo: ""
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private colleagueService: ColleagueService) {
    this.colleagueReactiveForm = this.fb.group({
        pseudo: ['', {
          validators: [Validators.required],
          asyncValidators: [this.pseudoValidate.bind(this)]
        }
        ],
        first: ['', [Validators.required, Validators.minLength(2)]],
        last: ['', [Validators.required, Validators.minLength(2)]],
        photo: ['', [Validators.required]],
      }, { validators: this.firstLastValidate }
    )
  }

  firstLastValidate(control: AbstractControl): ValidationErrors | null {
    if (control.value.first == control.value.last) return { firstLast: "prénom et nom ne peuvent être identiques" }
    else return null
  }

  pseudoValidate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    return this.http.get<string>('https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2/colleagues/' + control.value)
      .pipe(
        map((res) => {
          console.log("Dans map : ", res);
          return { testErreur: "pseudo pris!" };
        }),
        catchError((err) => {
          console.log("Dans catchError : ", err);
          return of(null);
        })
      )
  }


  onSubmit() {
    console.log(this.colleagueReactiveForm);
    this.creationColleague = {
      pseudo: this.colleagueReactiveForm.get('pseudo')?.value,
      first: this.colleagueReactiveForm.get('first')?.value,
      last: this.colleagueReactiveForm.get('last')?.value,
      photo: 'https://www.dentaire365.fr/wp-content/uploads/2022/06/Simplification-du-traitement-ledente-complet-iStock-497111709.jpg',
    }
    this.colleagueService
      .publier(this.creationColleague)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          this.errorReturned = e
        },
        complete: () => {
          console.info('complete');
          this.colleagueReactiveForm.reset();
        }
      })
  }
}
