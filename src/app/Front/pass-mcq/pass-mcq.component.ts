import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MCQ } from 'src/app/Models/MCQ';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-pass-mcq',
  templateUrl: './pass-mcq.component.html',
  styleUrls: ['./pass-mcq.component.css']
})
export class PassMcqComponent implements OnInit {

  constructor(private ps : EvaluationService, private route : ActivatedRoute) { }

  mcq!: MCQ;
  type = 'Language_Skills';
  answeredQuestions = 0;
  timeLeft: number = 599;
  i!: number;
  id!:number;
  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id')!;
    this.ps.getMCQ(this.id).subscribe(mcq => {
      if(mcq.score==0){
        this.mcq = mcq;
        setInterval(() => {
          this.timeLeft--;
          if (this.timeLeft == 0) {
            window.location.reload();
          }
        }, 1000);
      }
      else{
        this.i=10;
        this.mcq = mcq;
      }
    });
  }

  formatTimeLeft() {
    let minutes = Math.floor(this.timeLeft / 60);
    let seconds = this.timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  calculateScore() {
    let score = 0;
    for (let question of this.mcq.questions) {
      for (let response of question.responses) {
        if (response.correct) {
          const selectedResponse = document.getElementById(response.idResponse.toString()) as HTMLInputElement;
          if (selectedResponse.checked) {
            score++;
          }
        }
      }
    }
    
    if(score==0){
      score=0.1;
    }
    this.ps.setScoreToMCQ(this.mcq.idMcq, score).subscribe();

  }

  onAnswerSelected() {
    this.answeredQuestions++;
  }


  progress() {
    const percentage = (this.answeredQuestions / 12) * 100;
    const progressBar = document.getElementById('progress') as HTMLElement;
    progressBar.style.width = percentage + '%';
  }
  
}
