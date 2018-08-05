import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em { 
      float: right; 
      color: #E05C65; 
      padding-left: 10px; 
    }
    .error input {
      background-color: #E3C3C5;
    }
    .error ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:    #999;
    }
    .error :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:    #999;
      opacity:  1;
    }
    .error ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:    #999;
      opacity:  1;
    }
    .error :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color:    #999;
    }
    .error ::-ms-input-placeholder { /* Microsoft Edge */
      color:    #999;
    }
    .error ::placeholder { /* Most modern browsers support this now. */
      color:    #999;
    }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private router: Router,
              private authService: AuthService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.userName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
      // this.router.navigate(['events']);
    }
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
