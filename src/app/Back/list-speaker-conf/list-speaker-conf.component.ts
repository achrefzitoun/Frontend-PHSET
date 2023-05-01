import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Speaker } from 'src/app/Models/speaker';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-speaker-conf',
  templateUrl: './list-speaker-conf.component.html',
  styleUrls: ['./list-speaker-conf.component.css']
})
export class ListSpeakerConfComponent implements OnInit {
  event!: Event[];
  speakers!:Speaker[];
  speaker!:Speaker[];
  s!:Speaker;
  

  constructor(private service : EventService , private router : Router) { }

  ngOnInit(): void {
    this.s = new Speaker;
    this.service.getEventsSpeaker().subscribe({
      next : (data) => this.event = data ,  // besh nhez data l liste 
     });
    this.service.getSpeakers().subscribe({
      next : (data) => this.speaker = data ,  // besh nhez data l liste 
     });
  }

  getSpeaker(id:number){
    this.service.getSpeakerById(id).subscribe(speaker => {
      console.log('Speaker:', speaker);
      this.speaker = speaker;
    });
  }

  addSpeaker() {
    this.service.addSpeaker(this.s)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
