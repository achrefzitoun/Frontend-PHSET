import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-view-interview-jury',
  templateUrl: './view-interview-jury.component.html',
  styleUrls: ['./view-interview-jury.component.css']
})
export class ViewInterviewJuryComponent implements OnInit {

  interviews!: Interview[];
  constructor(private ps : EvaluationService, private router: Router) { }


  ngOnInit(): void {
    this.ps.getInterviewjury().subscribe({
      next:(data)=>this.interviews=data,
    });
  }

  goToGrid(id : number){
    this.router.navigate(['/grid'], { queryParams: { id: id } });
  }
  

}
