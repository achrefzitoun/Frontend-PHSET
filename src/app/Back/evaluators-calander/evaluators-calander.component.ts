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
    this.getALL();


    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
      this.calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin],
        events: []
      });
      this.calendar.render();}
  }
    

  getALL() {
    this.ps.getCurrentJuryInterview().subscribe((res) => {
      if (Array.isArray(res)) {  
        this.int = res;
        this.calendar.addEventSource(this.int.map(i => {  
          return {
            title: `Interview ${i.typeInterview}`,
            start: i.dateInterview , end: i.finInterview
          }
        }));
      }
    });

  }
}


