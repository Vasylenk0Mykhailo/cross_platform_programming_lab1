import { Furniture } from "../class/FURNITURE/Furniture";

export class Chair extends Furniture {
  constructor(
    name: string,
    material: string,
    weight: number,
    public override isPadded: boolean
  ) {
    super(name, material, weight);
  }

  adjustHeight(): void {
    console.log(`Висоту ${this.name} змінено.`);
  }

  displayInfo(): void {
    console.log(`Стілець: ${this.name}, Матеріал: ${this.material}, Вага: ${this.weight} кг, М'який: ${this.isPadded ? 'Так' : 'Ні'}`);
  }
}
