import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-claims-excel',
  templateUrl: './claims-excel.component.html',
  styleUrls: ['./claims-excel.component.css']
})
export class ClaimsExcelComponent implements OnInit {

  fichiers: string[] = [];
  data: any[][][] = [];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const moiss = [0o1, 0o2, 0o3, 0o4];
    for (const mois of moiss) {
      const nomFichier = `TraitedClaims2023-0${mois}.xlsx`;
      const url = `../../assets/${nomFichier}`;
      this.http.get(url, { responseType: 'arraybuffer' }).subscribe(response => {
        const data = new Uint8Array(response);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        this.fichiers.push(nomFichier);
        this.data.push(json as any[][]);
      }, error => {
        console.error(error);
      });
    }
  }

  getSafeUrl(fichier: string): SafeUrl {
    const url = `../../assets/${fichier}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
