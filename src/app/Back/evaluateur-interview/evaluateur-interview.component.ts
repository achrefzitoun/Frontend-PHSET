import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-evaluateur-interview',
  templateUrl: './evaluateur-interview.component.html',
  styleUrls: ['./evaluateur-interview.component.css']
})
export class EvaluateurInterviewComponent implements OnInit {

  interviews !: Interview[];
  constructor(private ps : EvaluationService, private router : Router) { }

  ngOnInit(): void {
    this.ps.findevaluators().subscribe({
      next:(data)=>this.interviews=data,
    });
  }

  goToGrid(id : number){
    this.router.navigate(['/grid'], { queryParams: { id: id } });
  }

}
