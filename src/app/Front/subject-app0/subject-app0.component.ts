import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-subject-app0',
  templateUrl: './subject-app0.component.html',
  styleUrls: ['./subject-app0.component.css']
})
export class SubjectApp0Component implements OnInit {

  event!:Event;
  today = new Date();
  formattedString !:any;
  constructor(private serv : EventService) { }
  
  ngOnInit(): void {
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00';
    this.serv.eventsApp0().subscribe(data => {
      this.event = data;
     
    });
    
  }
  getPreviousDate(date:Date) {
    const previousDate = new Date(date);
    previousDate.setDate(previousDate.getDate() - 1);
    return previousDate;
  }

}
