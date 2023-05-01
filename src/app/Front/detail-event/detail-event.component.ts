import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Reservation } from 'src/app/Models/reservation';
import { Room } from 'src/app/Models/room';
import { Speaker } from 'src/app/Models/speaker';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  
  id!: number;
  event!: Event;
  room!: Room;
  reserv!: Reservation;
  speaker!:Speaker[];

  
  constructor(private route: ActivatedRoute, private service: EventService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEventById(this.id).subscribe(event => {
      this.event = event;
    });
    this.service.getRoomByEvent(this.id).subscribe(room => {
      this.room = room;
    })
    this.service.getSpeakerById(this.id).subscribe(speaker => {
      console.log('Speaker:', speaker);
      this.speaker = speaker;
    });
    
  }

  reservation(id: number) {
    this.id = this.event.idEvent;
    this.service.reservationEvent(id).subscribe(reserv => {
      this.reserv.idRes = reserv.idRes;
      this.router.navigate(['/paiement/'+reserv.idRes]);
    
    });
    

  }


  estDesactive(dateDebut: Date) {
    const today = new Date(); 
    if (dateDebut > today){
      return true;
    }
    else
    return false ; 
  }

  
  




}
