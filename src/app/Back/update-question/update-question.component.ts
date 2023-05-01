import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/Models/Question';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

 
  question!:Question;
  id!:number;

  constructor(private ps : EvaluationService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id')!;
    this.ps.retrieveOneQuestion(this.id).subscribe(question => this.question = question);
  }

  onSubmit(){
    this.ps.updateQuestionAndResponse(this.question).subscribe();
  }

}
