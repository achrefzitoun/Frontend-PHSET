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
  ten : string ="";
  totalClaim : any;
  filteredClaims!: any[];
  date!: Date;
  firstName!: string;
  object!: string;
  claims!: Claim[];
  public searchTerm: string = '';



  constructor(private ps : EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.ps.getNoTraitedClaims().subscribe({
      next:(data)=> {
        this.filteredClaims=data,
        this.totalClaim=data.length;
      }
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/decission'], { queryParams: { id: id } });
  }


  
  search() {
    this.ps.searchClaims(
        this.formatDate(this.date),
        this.firstName,
        this.object
    ).subscribe({
      next:(data)=> {
        this.filteredClaims=data,
        this.totalClaim=data.length;
      }
    });
  }

  // Formatter la date au format YYYY-MM-DD
  formatDate(date: Date): string {
    if(date!=null){
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return year + '-' + month + '-' + day;
    }
    return ""; 
  }

  tendance() {
    this.ps.tendanceReclamation().subscribe((response: string) => {
      this.ten = response;
      window.alert(this.ten);
    });  
  }

  Sort(){
    this.ps.Sort().subscribe({
      next:(data)=> {
        this.filteredClaims=data,
        this.totalClaim=data.length;
      }
    });
  }

}
