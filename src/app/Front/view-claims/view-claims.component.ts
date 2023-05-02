import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { EvaluationService } from 'src/app/Services/evaluation.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-claims',
  templateUrl: './view-claims.component.html',
  styleUrls: ['./view-claims.component.css']
})
export class ViewClaimsComponent implements OnInit {


  itemPerPage : number = 8 ;
  p!:number;
  ten : string ="";
  totalClaim : any;
  filteredClaims: any[] = [];

  claims!:Claim[];
  constructor(private ps : EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getClaimsUser().subscribe({
      next:(data)=>this.claims=data,
    });

  }

  viewDetails(id: number): void {
    this.router.navigate(['/claim/view'], { queryParams: { id: id } });
  }
  

}
