import { Furniture } from "./FURNITURE/Furniture";

export class Table extends Furniture {
  constructor(
    name: string,
    material: string,
    weight: number,
    public numberOfLegs: number
  ) {
    super(name, material, weight);
    if (numberOfLegs <= 3) {
      throw new Error("Стіл повинен мати хоча б 4 ніжки");
    }
  }

  fold(): void {
    console.log(`${this.name} складено.`);
  }

  displayInfo(): void {
    console.log(`Стіл: ${this.name}, Матеріал: ${this.material}, Вага: ${this.weight} кг, Ніжок: ${this.numberOfLegs}`);
  }
}
