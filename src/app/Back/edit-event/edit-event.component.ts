import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Room } from 'src/app/Models/room';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id!:number;
  event!:Event;
  room!:Room[];
  myFile!: File;
  dates!:string;
  datef!:string;


  constructor(private route: ActivatedRoute, private service : EventService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEventById(this.id).subscribe(event => {
      this.event = event;
    });
  }
  onFileSelected(event: any) {
    this.myFile = event.target.files[0];
  }

  editEvent(){
    this.service.updateEvent(this.event, this.myFile).subscribe(() => {
      // navigate to Viewev view after the event is updated
      this.router.navigate(['/Viewev']);
    });
  }

  confirmDelete(): void {
    const idr = this.route.snapshot.params['id'];
    console.log(idr)
    if (confirm("Are you sure you want to delete?")) {
      this.service.deleteEv(idr).subscribe(() => {
        // navigate to Viewev view after the event is updated
        this.router.navigateByUrl('/Viewev');
      });
    } else {
      this.router.navigateByUrl('/Editev',idr);
    }
  }
}
