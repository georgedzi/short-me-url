import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-short-prompt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './short-prompt.component.html',
  styleUrl: './short-prompt.component.scss'
})
export class ShortPromptComponent {
  public urlFormGroup: FormGroup;
  public longURLPlaceHolder: string = "Super long URL here";
  public shortURLPlaceHolder: string = "Short URL outputs here";
  public submitBtnText: string = "Shrink";
  public InvalidUrlError: string = "default";
  public submitted: boolean = false;
  private urlRegex = new RegExp(
    '^(https?:\\/\\/)?' +
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
    '((\\d{1,3}\\.){3}\\d{1,3}))' +
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
    '(\\?[;&a-z\\d%_.~+=-]*)?' +
    '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  constructor() {
    this.urlFormGroup = new FormGroup({ longUrl: new FormControl("", [Validators.required, Validators.pattern(this.urlRegex)]) });
  }

  onSubmit() {
    if (this.urlFormGroup.valid) {
      // call backend to save url
      this.submitted = false;
    }
    else {
      if(this.urlFormGroup.controls['longUrl'].errors?.['required']){
        this.InvalidUrlError = "Required";
      }
      else{
        this.InvalidUrlError = "Invalid URL"
      }
      this.submitted = true;
    }
  }
}
