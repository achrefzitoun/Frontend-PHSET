import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private event: EventService) { }

  ngOnInit(): void {

    this.event.countEventsByType().subscribe((data: {[key: string]: number}) => {
      const labels = Object.keys(data);
      const color = this.getRandomColor();
      const datasets = [{
        label: 'Nombre d\'événements',
        data: Object.values(data),
        backgroundColor: color + '0.2)',
        borderColor: color + '1)',
        borderWidth: 1
      }];
      const canvas = document.getElementById('myChart') as HTMLCanvasElement;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'line',
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
