import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Table } from "../class/Table";
import { Chair } from "../class/Chair";
import { Furniture } from "../class/FURNITURE/Furniture";
import { MyHeaderComponent } from "../my-header/my-header.component";
import { NgIf, NgFor } from "@angular/common"; 
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: "app-abstract-class",
  templateUrl: "./abstract-class.page.html",
  styleUrls: ["./abstract-class.page.scss"],
  standalone: true,
  imports: [MyHeaderComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonCard, IonCardHeader, IonCardContent, IonCardTitle, NgIf, NgFor ],
})
export class AbstractClassPage implements OnInit {
  furnitureList: Furniture[] = [];
  heaviestFurniture?: Furniture;
  private jsonBinUrl = "https://api.jsonbin.io/v3/b/67c7e52be41b4d34e4a10636";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const headers = { 
      'X-Master-Key': '$2a$10$/r.Tn2o.SDXCgieHySLwMuKDIbyznQ8GgZtqUPvtqoryWq2EWYBVq'
    };

    this.http.get<any>(this.jsonBinUrl, { headers }).subscribe((response) => {
      const data = response.record; 
      this.furnitureList = data.map((item: any) =>
        item.type === "table"
          ? new Table(item.name, item.material, item.weight, item.numberOfLegs)
          : new Chair(item.name, item.material, item.weight, item.isPadded)
      );

      this.displayAllFurniture();
      this.findHeaviestFurniture();
    });
  }

  displayAllFurniture() {
    this.furnitureList.forEach((furniture) => furniture.displayInfo());
  }

  findHeaviestFurniture() {
    this.heaviestFurniture = this.furnitureList.reduce((prev, current) =>
      prev.getWeight() > current.getWeight() ? prev : current
    );
  }

  isChair(furniture: Furniture): boolean {
    return furniture instanceof Chair;
  }

  isTable(furniture: Furniture): boolean {
    return furniture instanceof Table;
  }

  getChairPadded(furniture: Furniture): string {
    return this.isChair(furniture) && (furniture as Chair).isPadded ? 'Так' : 'Ні';
  }

  getTableLegs(furniture: Furniture): number | null {
    return this.isTable(furniture) ? (furniture as Table).numberOfLegs : null;
  }
}
