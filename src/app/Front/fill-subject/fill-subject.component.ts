import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from 'src/app/Models/events';
import { Subject } from 'src/app/Models/subject';
import { Team } from 'src/app/Models/team';
import { Thematic } from 'src/app/Models/thematic';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-fill-subject',
  templateUrl: './fill-subject.component.html',
  styleUrls: ['./fill-subject.component.css']
})
export class FillSubjectComponent implements OnInit {

  event!: Event;
  constructor(private serv: EventService, private router: Router) { }
  sub!: Subject;
  them!: Thematic[];
  team!: Team;
  nos!: string;
  id!: number;

  ngOnInit(): void {
    this.sub = new Subject;
    this.serv.eventsApp0().subscribe(data => {
      this.event = data;

    });
    this.serv.getThematic().subscribe({
      next: (data) => this.them = data
    });

    this.serv.getTeam().subscribe(d => this.team = d)

  }
  message: string = '';

  submit() {

    this.serv.putSubjTeamThem(this.sub, this.id, this.nos, this.team.idTeam).subscribe(
      response => {
        this.message = response.toString();
        //this.router.navigate(["/subject"])
      },
      error => {
        console.log(error);
      }
    );

  }


onThematicChange(idThem: number) {
  this.id = idThem
}
}

