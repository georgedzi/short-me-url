import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-short-prompt',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './short-prompt.component.html',
  styleUrl: './short-prompt.component.scss'
})
export class ShortPromptComponent {
  public urlFormGroup: FormGroup;
  public urlPlaceHolder: string = "Enter URL...";
  public shortenBtnTitle: string = "Shrink";
  public InvalidUrlError: string = "Invalid URL";
  public submitted: boolean = false;
  public shortURL: string = "Default";
  public displayShort: boolean = false;
  private urlRegex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  );

  constructor() {
    this.urlFormGroup = new FormGroup({ longUrl: new FormControl("", [Validators.required, Validators.pattern(this.urlRegex)])});
  }

  onSubmit() {

    if (this.urlFormGroup.valid) {
      // call backend to save url
      this.submitted = false;
      this.shortURL = "http://localhost:4200/hashvalue";
      this.displayShort = true;
    }
    else {
      this.submitted = true;
      this.displayShort = false;
    }
  }

  isValidUrl(url: string) {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  }
}
