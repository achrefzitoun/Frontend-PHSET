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
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.getLeisEvent().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }
}
