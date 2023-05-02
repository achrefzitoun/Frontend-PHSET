import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  dateFInSeconds !: number;

  constructor(private service : EventService, public sanitizer: DomSanitizer, private route: ActivatedRoute, private router : Router) { }

  postvide!:PostVideo;
  ngOnInit(): void {
    this.service.eventsApp0().subscribe(data => {
      this.ev = data;
      const dateF = new Date(this.ev.dateF);
      dateF.setDate(dateF.getDate() + 2);
      this.ev.dateF = dateF; // <-- pas besoin de la convertir en chaîne de caractères
    
      const nowInSeconds = Math.floor(Date.now() / 1000);
      
      const dateFInSeconds = Math.floor(new Date(dateF.toISOString()).getTime() / 1000);
      const nowInSecondsUtc = Math.floor(new Date(new Date().toISOString()).getTime() / 1000);
      this.dateFInSeconds = dateFInSeconds - nowInSecondsUtc;
      const countdownInterval = setInterval(() => {
        if (this.dateFInSeconds > 0) {
          this.dateFInSeconds--;
        } else {
          clearInterval(countdownInterval);
        }
      }, 1000);
    
    
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

    formatTimeLeft() {
      let days = Math.floor(this.dateFInSeconds / (60 * 60 * 24));
      let hours = Math.floor(this.dateFInSeconds / (60 * 60)) % 24;
      let minutes = Math.floor(this.dateFInSeconds / 60) % 60;
      let seconds = this.dateFInSeconds % 60;
      if(this.dateFInSeconds<0){
        return "00:00:00";
      }
      return `${days.toString().padStart(2, '0')}J${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    confirmDelete(idr:number): void {
    
      if (confirm("Are you sure you want to delete?")) {
        this.service.deletVideo(idr).subscribe(() => {
          // navigate to Viewev view after the event is updated
          this.router.navigateByUrl('/listpost');
        });
      } else {
        this.router.navigateByUrl('/listpost');
      }
    }

}
