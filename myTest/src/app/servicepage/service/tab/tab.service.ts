import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  constructor(private logService: LogService) { }

  tabulate(start: number, end: number, step: number): {x: number, y: number}[] {
    const results: {x: number, y: number}[] = [];
    for (let x = start; x <= end; x += step) {
      const y = Math.atan(x);
      this.logService.log(`Tabulated at x=${x}`, y);
      results.push({x, y});
    }
    return results;
  }

  calculate(x: number): number {
    const y = Math.atan(x);
    this.logService.log(`Calculated at x=${x}`, y);
    return y;
  }
}