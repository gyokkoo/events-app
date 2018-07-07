import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr>
    <event-thumbnail #thumbnail [event]="event1" ></event-thumbnail>
  </div>
  `
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '4/3/2019',
    time: '9:00am',
    price: 49.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: 'Black Square',
      city: 'London',
      county: 'England'
    }
  }

  handleEventClicked(data) {
    console.log('Received:' + data);
  }
}