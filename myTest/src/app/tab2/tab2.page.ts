import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [FormsModule, IonInput, IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent, IonItem]
})
export class Tab2Page {
  startRange: number = 0;
  endRange: number = 0;
  resultTask2: string = '';
  
  constructor() {}

  calculateTask2() {
    let product = 1;
    let numbers: number[] = [];
    
    for (let i = this.startRange; i <= this.endRange; i++) {
      if (i % 7 === 0 && i < 30) {
        const firstDigit = parseInt(i.toString()[0], 10);
        if (firstDigit % 2 === 0) {
          numbers.push(i);
          product *= i;
        }
      }
    }
    
    this.resultTask2 = numbers.length > 0 ? `Числа: ${numbers.join(', ')}; Добуток: ${product}` : 'Немає відповідних чисел';
  }
}
