import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { Subject } from 'src/app/Models/subject';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  p!: number;
  itemsPerPage: number = 8;
  totalEvent: any;

  
  sub!: Subject[];
  constructor(private service: EventService) { }
  event!: Event;
  message: string = '';
  errorMessage: string = ' ';
  successMessage: string = ' ';

  dateFInSeconds !: number;
  ngOnInit(): void {
    this.service.eventsApp0().subscribe(event => {
      this.event = event;
      const nowInSeconds = Math.floor(Date.now() / 1000);
      const dateF = new Date(this.event.dateF);
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

    this.service.getSubject().subscribe({
      next: (data) => this.sub = data,  // besh nhez data l liste 
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

  getWinner() // Appeler la méthode CalculLikes() et afficher le message retourné dans une alerte
   {
    this.service.getWinner().subscribe(
      (message : any) => {
        alert(message.response);
      },
      (error : any) => {
        console.log(error);
      }
    );
  }
  
  
  
  



}
