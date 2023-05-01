import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Thematic } from 'src/app/Models/thematic';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-edi-thematic',
  templateUrl: './edi-thematic.component.html',
  styleUrls: ['./edi-thematic.component.css']
})
export class EdiThematicComponent implements OnInit {

  id!:number;
  t!:Thematic;
  constructor(private route: ActivatedRoute, private service : EventService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getThematicById(this.id).subscribe(t => {
      this.t = t;
    });
  }

  editThematic(){
    this.service.updateThematic(this.t).subscribe(() => {
      // navigate to Viewev view after the event is updated
      this.router.navigate(['/app0det']);
    });
  }

  confirmDelete(): void {
    const idr = this.route.snapshot.params['id'];
    console.log(idr)
    if (confirm("Are you sure you want to delete?")) {
      this.service.deleteThematic(idr).subscribe(() => {
        // navigate to Viewev view after the event is updated
        this.router.navigateByUrl('/app0det');
      });
    } else {
      this.router.navigateByUrl('/editThem/',idr);
    }
  }

}
