import { Component, OnInit, AfterViewInit } from '@angular/core'; 
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Chart, registerables } from 'chart.js/auto';
import { MyHeaderComponent } from "../my-header/my-header.component";  

Chart.register(...registerables);

interface Newspaper {
  date: string;
  name: string;
}

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, MyHeaderComponent, CommonModule],
})
export class CloudPage implements OnInit, AfterViewInit {
Object: any;
newspapersByMonth: any;
months: any;
  constructor(private http: HttpClient) {}  

  ngOnInit() {}

  ngAfterViewInit() {
    this.getNewspapers().subscribe(newspapers => {
      const groupedData = this.groupByMonth(newspapers);

      const labels = Object.keys(groupedData);
      const data = labels.map(month => groupedData[month].length);

      this.createChart('newspaperChart', labels, data, groupedData);
    });
  }

  getNewspapers(): Observable<Newspaper[]> {
    const URL = 'https://api.jsonbin.io/v3/b/67be4f13acd3cb34a8f09568';
    const HEADERS = { 'X-Master-Key': '$2a$10$/r.Tn2o.SDXCgieHySLwMuKDIbyznQ8GgZtqUPvtqoryWq2EWYBVq' };

    return this.http.get<any>(URL, { headers: HEADERS }).pipe(
      map(response => response.record.newspapers as Newspaper[])
    );
  }

  groupByMonth(newspapers: Newspaper[]): { [key: string]: Newspaper[] } {
    return newspapers.reduce((acc, paper) => {
      const month = paper.date.slice(0, 7); 
      if (!acc[month]) acc[month] = [];
      acc[month].push(paper);
      return acc;
    }, {} as { [key: string]: Newspaper[] });
  }

  createChart(canvasId: string, labels: string[], data: number[], groupedData: { [key: string]: Newspaper[] }) {
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;
    if (!ctx) {
      console.error(`Canvas with id ${canvasId} not found`);
      return;
    }

    const datasets = [{
      label: 'Кількість газет',
      data,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }];

    new Chart(ctx.getContext('2d')!, {
      type: 'bar',
      data: { labels, datasets },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem: any) => {
                const month = labels[tooltipItem.dataIndex];
                const newspapers = groupedData[month].map(n => n.name).join(', ');
                return `Газети: ${newspapers}`;
              }
            }
          }
        }
      }
    });
  }      
}