import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from './shared';

@Component({
  templateUrl: 'create-event.component.html',
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
export class CreateEventComponent {
  isDirty = true;

  constructor (private router: Router, private eventService: EventService) {

  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel () {
    this.router.navigate(['/events']);
  }
}
