import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colors } from 'chart.js';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  p!: number;
  itemsPerPage: number = 8;
  totalEvent: any;

  
  today = new Date();
  formattedString !:any;
  listEvent!: Event[];
  constructor(private service : EventService, private route : Router) { }

  ngOnInit(): void {
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00'; // "2023-05-01T13:12:34.000"
    this.service.getWithoutAPP0().subscribe({
      next : (data) => this.listEvent = data ,  // besh nhez data l liste 
     });
  }

  
  

}
