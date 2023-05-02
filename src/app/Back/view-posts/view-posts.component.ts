import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
import { PostVideo } from 'src/app/Models/postvideo';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {
  postvide!:PostVideo;
  listpostVideo!:PostVideo[];
  constructor(private service : EventService, public sanitizer: DomSanitizer , private router : Router) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe({
      next: (data) => {
        this.listpostVideo = data;}});
  }

  getsafeUrl(url:string) {
    var url = url.replace("dl=0","raw=1");
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  confirmDelete(idr:number): void {
    
    if (confirm("Are you sure you want to delete?")) {
      this.service.deletVideo(idr).subscribe(() => {
        // navigate to Viewev view after the event is updated
        this.router.navigateByUrl('/viewPost');
      });
    } else {
      this.router.navigateByUrl('/viewPost');
    }
  }
}
