import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/Models/Question';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {
  questions!:Question[];
  constructor(private ps : EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.ps.retrieveAllQuestion().subscribe({
      next:(data)=>this.questions=data,
    });
  }

  Delete(id: number){
    this.ps.deleteQuestion(id).subscribe();
  }

  Edit(id: number): void {
    this.router.navigate(['/updateQuest'], { queryParams: { id: id } });
  }

}

