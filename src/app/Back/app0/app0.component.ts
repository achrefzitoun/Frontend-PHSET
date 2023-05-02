import { Component, OnInit } from '@angular/core';
import { Thematic } from 'src/app/Models/thematic';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-app0',
  templateUrl: './app0.component.html',
  styleUrls: ['./app0.component.css']
})
export class APP0Component implements OnInit {
  p!: number;
  itemsPerPage: number = 8;
  totalEvent: any;
  
  te!:Thematic;
  them!:Thematic[];
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.te = new Thematic;
    this.service.getThematic().subscribe({
      next : (data) => this.them = data 
     });
  }

  addThem() {
    this.service.addThematic(this.te)
      .subscribe(() => {
        window.location.reload();
      });
  }
}
