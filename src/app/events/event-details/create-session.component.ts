import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession} from '../shared';

@Component({
  templateUrl: './create-session.component.html',
  styles: [`
    em { 
      float: right; 
      color: #E05C65; 
      padding-left: 10px; 
    }
    .error input, .error select, .error textarea {
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
export class CreateSessionComponent implements OnInit {

  newSessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues): void {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };

    console.log(session);
  }
}
