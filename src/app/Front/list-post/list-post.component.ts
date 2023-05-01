import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Event } from 'src/app/Models/events';
import { PostVideo } from 'src/app/Models/postvideo';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  listpostVideo!:PostVideo[];
  ev!:Event;
  

  constructor(private service : EventService, public sanitizer: DomSanitizer) { }

  postvide!:PostVideo;
  ngOnInit(): void {
    this.service.eventsApp0().subscribe(data => {
      this.ev = data;
      const dateF = new Date(this.ev.dateF);
      dateF.setDate(dateF.getDate() + 2);
      this.ev.dateF = dateF; // <-- pas besoin de la convertir en chaîne de caractères
    });
    
    this.service.getPosts().subscribe({
      next: (data) => {
        this.listpostVideo = data;
        this.listpostVideo.forEach(post => {
          if (post.linkPostVid == null) {
            console.log(`Le lien de la vidéo pour le post ${post.idPostVid} est null`);
          } else {
            console.log(`Le lien de la vidéo pour le post ${post.idPostVid} est ${post.linkPostVid}`);
          }
        });
      },
      error: (err) => {
        console.error(err);
      }
    });
      
    }
  
    getsafeUrl(url:string) {
      var url = url.replace("dl=0","raw=1");
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    likePost(id:number){
      return this.service.likePost(id).subscribe({
        next:()=>this.ngOnInit(), // pour l'actualisation
      });
    }
  

}
