import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [FormsModule, IonInput, IonLabel, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, MyHeaderComponent, IonItem, CommonModule]
})
export class Tab3Page {
  matrixSize: number = 3;
  matrix: number[][] = [];
  diagonalSum: number = 0;
  highlightYellow: boolean = false;

  constructor() {}

  generateMatrix() {
    this.matrix = [];
    this.diagonalSum = 0;
    this.highlightYellow = false;

    for (let i = 0; i < this.matrixSize; i++) {
      let row: number[] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        const value = Math.floor(Math.random() * 100); 
        row.push(value);
      }
      this.matrix.push(row);
    }

    let allOdd = true;
    for (let i = 0; i < this.matrixSize; i++) {
      this.diagonalSum += this.matrix[i][i];
      if (this.matrix[i][i] % 2 === 0) {
        allOdd = false;
      }
    }

    this.highlightYellow = allOdd;
  }
}