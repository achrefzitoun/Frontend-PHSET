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
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.getEducEvent().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }

}
