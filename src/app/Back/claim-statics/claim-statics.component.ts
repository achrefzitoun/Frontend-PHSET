import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { ClaimsByMonth } from 'src/app/Models/ClaimsByMonth';
import { EvaluationService } from 'src/app/Services/evaluation.service';


@Component({
  selector: 'app-claim-statics',
  templateUrl: './claim-statics.component.html',
  styleUrls: ['./claim-statics.component.css']
})
export class ClaimStaticsComponent implements OnInit {

  constructor(private ps : EvaluationService, private router : Router) { }

  
  ngOnInit() {
    this.ps.countClaimsByMonth().subscribe((data: ClaimsByMonth) => {
      const labels = Object.keys(data);
      const datasets = Object.entries(data[labels[0]]).map(([etat, value], i) => {
        const color = this.getRandomColor();
        const values = Object.values(data).map(monthlyCount => monthlyCount[etat] || 0);
        return {
          label: etat,
          data: values,
          backgroundColor: color + '0.2)',
          borderColor: color + '1)',
          borderWidth: 1
        };
      });
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
  
  

  updatefiles(){

  }

  viewfiles(){
    this.router.navigate(['/Excel']);

  }

  viewreports(){
    this.router.navigate(['/chaimreport']);
  }
}