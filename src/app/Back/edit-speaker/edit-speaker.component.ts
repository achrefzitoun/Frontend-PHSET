import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from 'src/app/Models/speaker';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-edit-speaker',
  templateUrl: './edit-speaker.component.html',
  styleUrls: ['./edit-speaker.component.css']
})
export class EditSpeakerComponent implements OnInit {

  
  id!:number;
  speaker!:Speaker;

  constructor(private route: ActivatedRoute, private service : EventService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getSpeakById(this.id).subscribe(speaker => {
      this.speaker = speaker;
    });
  }
  editSpeaker(){
    this.service.editSpeaker(this.speaker).subscribe(() => {
      // navigate to Viewev view after the event is updated
      this.router.navigate(['/speaker']);
    });
  }

  confirmDelete(): void {
    const idr = this.route.snapshot.params['id'];
    console.log(idr)
    if (confirm("Are you sure you want to delete?")) {
      this.service.deleteSpeaker(idr).subscribe(() => {
        // navigate to Viewev view after the event is updated
        this.router.navigateByUrl('/speaker');
      });
    } else {
      this.router.navigateByUrl('/Editev',idr);
    }
  }

}
