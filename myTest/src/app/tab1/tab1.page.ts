import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent, IonInput],
})
export class Tab1Page {
  number1: number = 0;
  number2: number = 0;
  number3: number = 0;
  resultTask1: number | string = '';
  
  startRange: number = 0;
  endRange: number = 0;
  resultTask2: string = '';

  constructor() {}

  calculateTask1() {
    if (this.number1 % 3 === 0 && this.number2 % 3 === 0 && this.number3 % 3 === 0) {
      this.resultTask1 = this.number1 + this.number2 + this.number3;
    } else {
      const sum = this.number1 + this.number2 + this.number3;
      const productOfDigits = this.getProductOfDigits(sum);
      if (productOfDigits % 2 === 0) {
        this.resultTask1 = Math.pow(sum, 3);
      } else {
        this.resultTask1 = 'Добуток цифр непарний';
      }
    }
  }
  private getProductOfDigits(num: number): number {
    return num.toString().split('').reduce((product, digit) => product * parseInt(digit, 10), 1);
  }
}
