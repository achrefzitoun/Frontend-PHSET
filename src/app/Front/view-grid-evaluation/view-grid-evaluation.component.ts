import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridEvaluation } from 'src/app/Models/GridEvaluation';
import { Interview } from 'src/app/Models/Interview';
import { TaskEvaluation } from 'src/app/Models/TaskEvaluation';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-view-grid-evaluation',
  templateUrl: './view-grid-evaluation.component.html',
  styleUrls: ['./view-grid-evaluation.component.css']
})
export class ViewGridEvaluationComponent implements OnInit {

  id!:number;
  gridEval !: GridEvaluation;
  interview !: Interview;
  constructor(private ps : EvaluationService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id')!;

    this.ps.retrieveGridEvaluation(this.id).subscribe(grid => this.gridEval = grid);

    this.ps.getInterviewByGrid(this.id).subscribe(interview => this.interview = interview);
  }

  saveTaskEvaluations() {
    this.gridEval.evaluations.forEach((e) => {
      e.taskEvaluation.forEach((task) => {
        this.ps.setScoreToTaskEvaluation(task.idTaskEval, task.note, task.remark).subscribe();
      });
    });
  }
  

  
}
