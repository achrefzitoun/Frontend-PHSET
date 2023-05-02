import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Event } from 'src/app/Models/events';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-stat-reserv',
  templateUrl: './stat-reserv.component.html',
  styleUrls: ['./stat-reserv.component.css']
})
export class StatReservComponent implements OnInit {

  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.service.countEventsByType().subscribe((data: {[key: string]: number}) => {
      const labels = Object.keys(data);
      const color = this.getRandomColor();
      const datasets = [{
        label: 'Nombre de réservations',
        data: Object.values(data),
        backgroundColor: color + '0.2)',
        borderColor: color + '1)',
        borderWidth: 1
      }];
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: datasets
          }
        });
      }
    });
  }

  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},`;
  }
}
