import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostVideo } from 'src/app/Models/postvideo';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {

  
  postvid !: PostVideo ;
  myFile!: File;
  message: string = '';

  constructor(private service : EventService , private route : Router) { }

  ngOnInit(): void {
    this.postvid = new PostVideo ;
  }
  onFileSelected(event: any) {
    this.myFile = event.target.files[0];
  }

  add() {
    this.service.createPost(this.postvid, this.myFile).subscribe(
      response => {
        this.message=response.toString();
        },
        error => {
        console.log(error);
        }
    );
  }
  
  
  


}

