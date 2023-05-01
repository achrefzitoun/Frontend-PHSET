import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/Models/Question';
import { Response } from 'src/app/Models/Response';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-mcq-questions',
  templateUrl: './mcq-questions.component.html',
  styleUrls: ['./mcq-questions.component.css']
})
export class MCQQuestionsComponent implements OnInit {

  question!:Question;
  constructor(private ps: EvaluationService) { }
  response0!: Response;
  response1!: Response;
  response2!: Response;

  ngOnInit(): void {
    this.question = new Question;
    this.response0 = new Response;
    this.response1 = new Response;
    this.response2 = new Response;
    this.question.responses = [];
  }

  onSubmit(){
    this.question.responses.push(this.response0);
    this.question.responses.push(this.response1);
    this.question.responses.push(this.response2);
    this.ps.addQuestionAndResponse(this.question)
    .subscribe((result) => {
      console.log(result);
  })
  }
}
