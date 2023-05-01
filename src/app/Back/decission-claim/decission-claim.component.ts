import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { Decission } from 'src/app/Models/Decission';
import { EtatClaim } from 'src/app/Models/EtatClaim';
import { User } from 'src/app/Models/User';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-decission-claim',
  templateUrl: './decission-claim.component.html',
  styleUrls: ['./decission-claim.component.css']
})
export class DecissionClaimComponent implements OnInit {
  etatt!: string;
  claim!: Claim;
  id!: number;
  user!:User;
  decission!:Decission;
  
  constructor(private ps: EvaluationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.decission = new Decission;
    this.id = +this.route.snapshot.queryParamMap.get('id')!;
    this.ps.getUserClaim(this.id).subscribe(user => this.user = user);
    this.ps.getClaim(this.id).subscribe(claim => this.claim = claim, );
  }

  onSubmit() {
    const id = this.id; // ou utilisez directement this.id si vous préférez
    const decission = this.decission;
    this.ps.addAndAssignDecissionToClaim(id, decission, this.etatt).subscribe();
  }
  



}
