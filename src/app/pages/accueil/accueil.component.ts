import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-accueil',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
})
export class AccueilComponent implements AfterViewInit {
  chart: any;

  private cdr = inject(ChangeDetectorRef);

  public config: any = {
    type: 'bar',
    data: {
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUNE',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
      datasets: [
        {
          label: 'Sales',
          data: [100, 80, 125, 45, 200, 34, 25, 67, 15, 29, 86, 67], // Utilisez "data" au lieu de "date"
          backgroundColor: 'blue',
        },
        {
          label: 'PAT',
          data: [80, 100, 75, 65, 150, 100, 80, 125, 45, 200, 34, 25], // Utilisez "data" au lieu de "date"
          backgroundColor: '#f5d333',
        },
      ],
    },
  };

  ngAfterViewInit(): void {
    this.chart = new Chart('MyChart', this.config);
    this.cdr.detectChanges(); // Pour forcer le recalcul du charte à la fin du cycle de vie
  }
}
