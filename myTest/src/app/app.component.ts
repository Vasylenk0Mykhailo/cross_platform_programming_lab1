import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet,IonMenu, IonList,IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,IonMenu, IonList,IonHeader, IonToolbar, IonTitle, IonContent, IonMenuToggle, IonItem ],
})
export class AppComponent {
  constructor() {}
}
