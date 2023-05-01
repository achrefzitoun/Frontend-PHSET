import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  claim: Claim = new Claim();
  file!: File;
  isChecked: boolean = false;

  constructor(private ps : EvaluationService, private router: Router) { }

  ngOnInit(): void {
    this.claim = new Claim();
  }

  onCheckboxChange() {
    const checkbox = document.getElementById('flexSwitchCheckDefault') as HTMLInputElement;
    const button = document.getElementById('submitButton') as HTMLButtonElement;
    button.disabled = !checkbox.checked;
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    this.ps.addClaim(this.claim, this.file)
      .subscribe(
        response => console.log(response),
        error => console.error(error)
      );
      this.router.navigate(['/claims']);
  }
}
