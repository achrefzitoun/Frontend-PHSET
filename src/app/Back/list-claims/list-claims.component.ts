import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit {
  ListClaim !: Claim[]
  itemPerPage : number = 8 ;
  p!:number;

  totalClaim : any;

  constructor(private ps : EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getNoTraitedClaims().subscribe({
      next:(data)=> {
        this.ListClaim=data,
        this.totalClaim=data.length;
      }
    });
    

  }
  
  
  viewDetails(id: number): void {
    this.router.navigate(['/decission'], { queryParams: { id: id } });
  }

}
