import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  constructor(private logService: LogService) { }

  private recursiveTerm(x: number, n: number, current: number, sum: number, precision: number): number {
    if (Math.abs(current) < precision) {
      return sum;
    }
    const nextTerm = Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
    return this.recursiveTerm(x, n + 1, nextTerm, sum + nextTerm, precision);
  }

  calculateRecursive(x: number, precision: number = 0.0001): number {
    const result = this.recursiveTerm(x, 0, x, 0, precision);
    this.logService.log(`Recursive calculated at x=${x}`, result);
    return result;
  }

  tabulateRecursive(start: number, end: number, step: number): {x: number, y: number}[] {
    const results: {x: number, y: number}[] = [];
    for (let x = start; x <= end; x += step) {
      const y = this.calculateRecursive(x);
      results.push({x, y});
    }
    return results;
  }
}