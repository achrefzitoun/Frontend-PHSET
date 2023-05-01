import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  listEvent!: Event[];
  constructor(private service : EventService, private route : Router) { }

  ngOnInit(): void {
    this.service.getWithoutAPP0().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }

}
