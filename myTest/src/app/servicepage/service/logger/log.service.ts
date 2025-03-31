import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(message: string, value: number): void {
    console.log(`${message}: ${value}`);
  }
}