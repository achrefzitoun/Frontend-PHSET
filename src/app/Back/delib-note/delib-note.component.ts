import { Component, OnInit } from '@angular/core';
import { GridEvaluation } from 'src/app/Models/GridEvaluation';
import { Interview } from 'src/app/Models/Interview';
import { MCQ } from 'src/app/Models/MCQ';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-delib-note',
  templateUrl: './delib-note.component.html',
  styleUrls: ['./delib-note.component.css']
})
export class DelibNoteComponent implements OnInit {

  Interviews !: Interview[];  

  itemPerPage : number = 8 ;
  p!:number;
  totalClaim : any;

  constructor(private ps : EvaluationService) { }

  ngOnInit(): void {
    this.ps.getInterview().subscribe({
      next:(data)=> {
        this.Interviews=data,
        this.totalClaim=data.length;
      }
    });
  }

  delib(){
    this.ps.assignScoreToInterview().subscribe();
  }
}
