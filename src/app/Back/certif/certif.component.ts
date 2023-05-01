import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Certif } from 'src/app/Models/certif';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css']
})
export class CertifComponent implements OnInit {

  
  certif!:Certif[];
  constructor(private ser : EventService , public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.ser.getCertif().subscribe({
      next : (data) => this.certif = data ,  // besh nhez data l liste 
     });
  }
  getsafeUrl(url:string) {
    var url = url.replace("dl=0","raw=1");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
