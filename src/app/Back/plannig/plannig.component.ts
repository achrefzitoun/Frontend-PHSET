import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-plannig',
  templateUrl: './plannig.component.html',
  styleUrls: ['./plannig.component.css']
})
export class PlannigComponent implements OnInit {

  id!:number;
  pdfUrl!: SafeResourceUrl;
  

  constructor(private route: ActivatedRoute, private service :EventService ,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadPdf();
  }
  loadPdf() {
    this.service.getPlanningPdf(this.id).subscribe(blob => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const pdfData = fileReader.result;
        if (pdfData !== null) {
        const blobPart = pdfData instanceof ArrayBuffer ? pdfData : new TextEncoder().encode(pdfData);
        const pdfBlob = new Blob([blobPart], { type: 'application/pdf' });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
      }};
      fileReader.readAsArrayBuffer(blob);
    });
  }
  
  
  
  
}
