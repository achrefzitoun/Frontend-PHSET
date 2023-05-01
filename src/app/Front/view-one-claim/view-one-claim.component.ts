import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-view-one-claim',
  templateUrl: './view-one-claim.component.html',
  styleUrls: ['./view-one-claim.component.css']
})
export class ViewOneClaimComponent implements OnInit {

  claim!:Claim;
  id!:number;

  constructor(private ps : EvaluationService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id')!;
    this.ps.getClaim(this.id).subscribe(claim => this.claim = claim);
    
  }


  

}
