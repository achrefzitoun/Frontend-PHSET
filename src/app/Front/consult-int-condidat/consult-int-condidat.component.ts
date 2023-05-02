import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-consult-int-condidat',
  templateUrl: './consult-int-condidat.component.html',
  styleUrls: ['./consult-int-condidat.component.css']
})
export class ConsultIntCondidatComponent implements OnInit {

  
  interviews!: Interview[];
  constructor(private ps : EvaluationService, private router: Router) { }


  ngOnInit(): void {
    this.ps.getInterviewjury().subscribe({
      next:(data)=>this.interviews=data,
    });
  }

  goToMcq(id : number){
    this.router.navigate(['/mcq'], { queryParams: { id: id } });
  }
}
