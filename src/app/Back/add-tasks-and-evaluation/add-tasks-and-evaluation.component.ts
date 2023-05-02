import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/Models/Evaluation';
import { TaskEvaluation } from 'src/app/Models/TaskEvaluation';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-add-tasks-and-evaluation',
  templateUrl: './add-tasks-and-evaluation.component.html',
  styleUrls: ['./add-tasks-and-evaluation.component.css']
})
export class AddTasksAndEvaluationComponent implements OnInit {

  constructor(private ps : EvaluationService) { }

  ngOnInit(): void {
  }

  evaluation: Evaluation = new Evaluation();
  tasks: TaskEvaluation[] = [new TaskEvaluation()];


  addTask() {
    this.tasks.push(new TaskEvaluation());
  }

  submitEvaluation() {
    this.evaluation.taskEvaluation = this.tasks;
    this.ps.addEvaluationAndTaskEvaluationAndAssignTaskToEvaluataion(this.evaluation).subscribe(() => {
      console.log("add Successfully");
      this.evaluation = new Evaluation();
      this.tasks = [new TaskEvaluation()];
    });
  }
}


