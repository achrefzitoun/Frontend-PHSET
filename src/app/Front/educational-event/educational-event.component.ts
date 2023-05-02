import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-educational-event',
  templateUrl: './educational-event.component.html',
  styleUrls: ['./educational-event.component.css']
})
export class EducationalEventComponent implements OnInit {

  listEvent!: Event[];
  today = new Date();
  formattedString !:any;
  constructor(private service : EventService) { }

  ngOnInit(): void {
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00'; // "2023-05-01T13:12:34.000"
    this.service.getEducEvent().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }

}
