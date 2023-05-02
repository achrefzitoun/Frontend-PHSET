import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/Models/reservation';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-reserv',
  templateUrl: './list-reserv.component.html',
  styleUrls: ['./list-reserv.component.css']
})
export class ListReservComponent implements OnInit {

  listRes!:Reservation[];

  
  p!:number;
  itemsPerPage :number=8; 
  totalEvent:any;
  
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.getAllRes().subscribe({
      next : (data) =>{
        this.listRes = data ,  // besh nhez data l liste 
        this.totalEvent=data.length;
      } 
    });

  }

}
