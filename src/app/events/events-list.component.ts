import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="well horewell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: \${{event.price}}</div>
        <div>
          <span>Location: {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
      </div>
    </div>
    `
})
export class EventListComponent {
  event = {
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
}