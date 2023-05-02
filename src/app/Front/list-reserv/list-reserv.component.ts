import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Models/reservation';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-reserv',
  templateUrl: './list-reserv.component.html',
  styleUrls: ['./list-reserv.component.css']
})
export class ListReservComponent implements OnInit {
  
  p!: number;
  itemsPerPage: number = 8;
  totalEvent: any;

  resev!:Reservation[];
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.getReservByAccount().subscribe({
      next : (data) => this.resev = data ,  // besh nhez data l liste 
     });
  }

}
