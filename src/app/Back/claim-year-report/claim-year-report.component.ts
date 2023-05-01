import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-claim-year-report',
  templateUrl: './claim-year-report.component.html',
  styleUrls: ['./claim-year-report.component.css']
})
export class ClaimYearReportComponent implements OnInit {
  public fichiers: string[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const annees = [2022, 2023];
    for (const annee of annees) {
      const nomFichier = `claim_report${annee}.pdf`;
      if (this.fichierExiste(nomFichier)) {
        this.fichiers.push(nomFichier);
      }
    }
  }

  fichierExiste(nomFichier: string): boolean {
    return true;
  }

  getSafeUrl(fichier: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`../../assets/${fichier}`);
  }
}
