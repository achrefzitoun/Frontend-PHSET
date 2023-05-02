import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Interview } from 'src/app/Models/Interview';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-evaluators-calander',
  templateUrl: './evaluators-calander.component.html',
  styleUrls: ['./evaluators-calander.component.css']
})
export class EvaluatorsCalanderComponent implements OnInit {
  calendar!: Calendar;
  calendarOptions: any;

  int!:Interview[];

  constructor(private ps : EvaluationService) { }

  ngOnInit(): void {
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        events: [],
        eventClick: (info) => {
          if (confirm(`${info.event.title}.. Do you want to cancel your participation in this event?`)) {
            const eventId = info.event.id;
            this.ps.desafecterProfInterview(eventId,null).subscribe(() => {
              info.event.remove();
              alert(`L'événement "${info.event.title}" a été supprimé.`);
            });
          }
        }
      });
      this.ps.getCurrentJuryInterview().subscribe((res) => {
        if (Array.isArray(res)) {
          const events = res.map((i) => ({
            title: `Interview ${i.typeInterview}`,
            start: i.dateInterview,
            end: i.finInterview,
            id: i.idInterview.toString()
          }));
          this.calendar.addEventSource(events);
        }
      });
      this.calendar.render();
    }
  }
}


