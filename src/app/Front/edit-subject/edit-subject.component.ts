import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/Models/subject';
import { Thematic } from 'src/app/Models/thematic';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  id!:number;
  subject!: Subject
  thematic!:Thematic[]

  today = new Date();
  formattedString !:any;
  constructor(private route : ActivatedRoute , private service : EventService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00';

    this.service.getSubjectById(this.id).subscribe(subject => {
      this.subject = subject;
    });
    this.service.getThematic().subscribe({
      next: (data) => this.thematic = data
    });
  }

  onThematicChange(idThem: number) {
    this.id = idThem
  }

  editSubject(){
    this.service.putSubject(this.subject).subscribe(() => {
      // navigate to Viewev view after the event is updated
      this.router.navigate(['/Subj']);
    });
  }

}
