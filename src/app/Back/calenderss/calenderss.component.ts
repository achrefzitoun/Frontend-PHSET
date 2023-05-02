import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';

import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import { EventService } from 'src/app/Services/event.service';
@Component({
  selector: 'app-calenderss',
  templateUrl: './calenderss.component.html',
  styleUrls: ['./calenderss.component.css']
})
export class CalenderssComponent implements OnInit {

  events!: Event[];
  calendar!: Calendar;
  calendarOptions: any;

  constructor(private service: EventService) { }

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        events: [],
        eventClick: (info) => {
          if (confirm(`${ info.event.title }..Do you want to cancel your participation in this event ?`)) {
            const eventId = info.event.id;
            this.service.deleteEv(eventId).subscribe(() => {
              info.event.remove();
              alert(`L'événement "${info.event.title}" a été supprimé.`);
            });
          }
        }
      });
      this.service.getEvents().subscribe((event) => {
        if (Array.isArray(event)) {  // vérifier si res est un tableau
          this.events = event;
          this.calendar.addEventSource(this.events.map(a => {  // utiliser map() si this.RDV est un tableau
            return {
              title: `Event ${a.titleEvent}`,
              start: a.dateS, end: a.dateF,
              id : a.idEvent.toString()
            }
          }));
        }
      });
      this.calendar.render();
    }
  }

 
}