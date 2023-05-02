import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-leisure-event',
  templateUrl: './leisure-event.component.html',
  styleUrls: ['./leisure-event.component.css']
})
export class LeisureEventComponent implements OnInit {
  listEvent!: Event[];
  today = new Date();
  formattedString !:any;
  constructor(private service : EventService) { }

  ngOnInit(): void {
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00'; // "2023-05-01T13:12:34.000"
    this.service.getLeisEvent().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }
}
