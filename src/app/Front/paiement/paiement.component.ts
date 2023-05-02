import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Paiement } from 'src/app/Models/paiement';
import { Reservation } from 'src/app/Models/reservation';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  
  id!: number;
  reserv!:Reservation;
  paye: Paiement = {
    montant: 0,
    stripeToken: ''
  };
  event!:Event;

  constructor(private route: ActivatedRoute , private service : EventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getReservById(this.id).subscribe();
    this.service.eventByres(this.id).subscribe(data => {
      this.event = data;
    });

    
  }

  pay() {
    this.paye.montant=this.event.priceEvent;
    if (this.paye && this.event.priceEvent && this.paye.stripeToken) {
      this.service.pay(this.paye, this.id).subscribe(
      );
      console.log(this.paye.montant);
      console.log(this.paye.stripeToken);
    } else {
      console.error("Paiement non effectué : données manquantes");
    }
  }

}
