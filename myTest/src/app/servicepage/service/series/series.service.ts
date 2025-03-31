import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  constructor(private logService: LogService) { }

  private term(x: number, n: number): number {
    return Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
  }

  calculateSeries(x: number, precision: number = 0.0001): number {
    let sum = 0;
    let n = 0;
    let termValue: number;
    
    do {
      termValue = this.term(x, n);
      sum += termValue;
      n++;
    } while (Math.abs(termValue) > precision);

    this.logService.log(`Series calculated at x=${x}`, sum);
    return sum;
  }

  tabulateSeries(start: number, end: number, step: number): {x: number, y: number}[] {
    const results: {x: number, y: number}[] = [];
    for (let x = start; x <= end; x += step) {
      const y = this.calculateSeries(x);
      results.push({x, y});
    }
    return results;
  }
}