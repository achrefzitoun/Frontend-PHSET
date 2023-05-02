import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/Models/Evaluation';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-view-tasks-and-evaluations',
  templateUrl: './view-tasks-and-evaluations.component.html',
  styleUrls: ['./view-tasks-and-evaluations.component.css']
})
export class ViewTasksAndEvaluationsComponent implements OnInit {

  constructor(private ps: EvaluationService) { }
  evaluations!:Evaluation[];
  
  itemPerPage !:number;
  p!:number;
  totalEvaluations : any;

  ngOnInit(): void {
    this.ps.retrieveAllEvaluations().subscribe({
      next:(data)=> {
        this.evaluations=data;
        this.totalEvaluations=data.length;
      }
    });
  }

}
