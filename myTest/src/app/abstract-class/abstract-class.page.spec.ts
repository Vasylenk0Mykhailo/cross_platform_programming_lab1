import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbstractClassPage } from './abstract-class.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { NgIf, NgFor } from '@angular/common';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonItem, IonLabel, IonCard, 
  IonCardHeader, IonCardContent, IonCardTitle 
} from '@ionic/angular/standalone';

describe('AbstractClassPage', () => {
  let component: AbstractClassPage;
  let fixture: ComponentFixture<AbstractClassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AbstractClassPage,
        HttpClientTestingModule,
        MyHeaderComponent,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardTitle,
        NgIf,
        NgFor
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});