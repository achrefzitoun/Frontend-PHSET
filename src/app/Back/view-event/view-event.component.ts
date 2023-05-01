import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  listEvent!:Event[];
  constructor(private service : EventService) { }

  p!:number;
  itemsPerPage :number=8; 
  totalEvent:any;
  ngOnInit(): void {
    this.service.getEvents().subscribe({
      next : (data) =>{
        this.listEvent = data ,  // besh nhez data l liste 
        this.totalEvent=data.length;
      } 
    });
     
  }


}
