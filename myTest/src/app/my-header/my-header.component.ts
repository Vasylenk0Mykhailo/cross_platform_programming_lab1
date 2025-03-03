import { IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton
 } from '@ionic/angular/standalone';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  standalone: true,
  imports: [IonButtons,IonHeader, IonToolbar, IonTitle, IonMenuButton],
})
export class MyHeaderComponent  implements OnInit {
  @Input() name: string ='Лабораторні роботи'
  constructor() { }

  ngOnInit() {}

}
