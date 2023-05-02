import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Models/subject';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-detail-subjects',
  templateUrl: './detail-subjects.component.html',
  styleUrls: ['./detail-subjects.component.css']
})
export class DetailSubjectsComponent implements OnInit {

  subject!:Subject;
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.getSubjectByAccout().subscribe({
      next : (data) => this.subject = data ,  // besh nhez data l liste 
     });
  }

}
