import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Room } from 'src/app/Models/room';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event!: Event;
  room!: Room[];
  myFile!: File;
  dates!: string;
  datef!: string;

  constructor(private service: EventService, private router: Router) { }

  ngOnInit(): void {
    this.event = new Event();
  }

  onFileSelected(event: any) {
    this.myFile = event.target.files[0];
  }

  addEvent() {
    this.service.addEvent(this.event, this.myFile, this.dates, this.datef)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/Viewev']);
      },
        error => console.error(error)
      );
  }

}


