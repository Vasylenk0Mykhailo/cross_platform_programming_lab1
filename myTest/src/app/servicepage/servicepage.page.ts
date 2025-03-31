import { Component, OnInit } from "@angular/core";
import { Chart, ChartConfiguration } from "chart.js/auto"; 
import { RecursionService } from "./service/recursion/recursion.service";
import { SeriesService } from "./service/series/series.service";
import { TabService } from "./service/tab/tab.service";
import { IonHeader, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonList, IonItem, IonLabel } from "@ionic/angular/standalone";
import { MyHeaderComponent } from "../my-header/my-header.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonButton, 
    IonCard, 
    IonContent, 
    MyHeaderComponent, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonLabel
  ],
})
export class ServicepagePage implements OnInit {
  tabResults: {x: number, y: number}[] = [];
  seriesResults: {x: number, y: number}[] = [];
  recursiveResults: {x: number, y: number}[] = [];
  comparisonResults: any[] = [];
  charts: Chart[] = [];

  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) {}

  ngOnInit() {
    setTimeout(() => this.calculateAll(), 100); // Added small delay for DOM initialization
  }

  calculateAll() {
    const start = -0.9;
    const end = 0.9;
    const step = 0.1;

    this.tabResults = this.tabService.tabulate(start, end, step);
    this.seriesResults = this.seriesService.tabulateSeries(start, end, step);
    this.recursiveResults = this.recursionService.tabulateRecursive(start, end, step);
    
    this.prepareComparisonResults();
    this.createCharts();
  }

  prepareComparisonResults() {
    this.comparisonResults = [];
    for (let i = 0; i < this.tabResults.length; i++) {
      this.comparisonResults.push({
        x: this.tabResults[i].x.toFixed(2),
        tabY: this.tabResults[i].y.toFixed(4),
        seriesY: this.seriesResults[i].y.toFixed(4),
        recursiveY: this.recursiveResults[i].y.toFixed(4)
      });
    }
  }

  createCharts() {
    this.destroyCharts();

    this.createChart('tabChart', 'Tabulation Method', this.tabResults);
    this.createChart('seriesChart', 'Series Method', this.seriesResults);
    this.createChart('recursiveChart', 'Recursive Method', this.recursiveResults);
  }

  createChart(canvasId: string, label: string, data: {x: number, y: number}[]) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.map(item => item.x.toFixed(2)),
        datasets: [{
          label: label,
          data: data.map(item => item.y),
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    };

    this.charts.push(new Chart(ctx, config));
  }

  destroyCharts() {
    this.charts.forEach(chart => chart.destroy());
    this.charts = [];
  }
}