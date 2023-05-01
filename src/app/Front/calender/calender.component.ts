import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  events!:Event[];
  calendar!: Calendar;
  calendarOptions: any;

  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.getAllEvents();
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        events: []
      });
      this.calendar.render();}
  }

  getAllEvents() {
    this.service.getEvents().subscribe((event) => {
      if (Array.isArray(event)) {  // vérifier si res est un tableau
        this.events = event;
        this.calendar.addEventSource(this.events.map(a => {  // utiliser map() si this.RDV est un tableau
          return {
            title: `Event ${a.titleEvent}`,
            start: a.dateS , end: a.dateF
          }
        }));
      }
    });
  }

}
