import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  public searchTerm: string = '';

  listEvent!: Event[];

  constructor(private service: EventService) { }

  p!: number;
  itemsPerPage: number = 8;
  totalEvent: any;

  today = new Date();
  formattedString !: any;
  


  ngOnInit(): void {
    const today = new Date();
    const isoString = today.toISOString(); // "2023-05-01T13:12:34.567Z"
    this.formattedString = isoString.slice(0, -5) + '00';
    this.service.getEvents().subscribe({
      next: (data) => {
        this.listEvent = data,  // besh nhez data l liste 
          this.totalEvent = data.length;
      }
    });



  }

  getCertif(id: number) {
    this.service.generateCertif(id).subscribe(
      response => {
        // La réponse est gérée dans le bloc "response"
        // Vous pouvez ajouter le code nécessaire ici si besoin
      },
      error => {
        // La gestion d'erreur est gérée dans le bloc "error"
        if (error.status === 400 && error.error.message === "Certificats déjà générés") {
          alert("Les certificats sont déjà générés");
        } else {
          // Si l'erreur n'est pas liée aux certificats déjà générés,
          // vous pouvez ajouter le code nécessaire ici pour la gérer
        }
      }
    );
  }

  sorted()
  {
    this.service.sorted().subscribe(a=> this.listEvent = a);
  }

  reversed()
  {
    this.service.Reversed().subscribe(a=> this.listEvent = a);
  }



}
