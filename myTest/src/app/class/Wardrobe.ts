import { Furniture } from "./FURNITURE/Furniture";

export class Wardrobe extends Furniture {
    constructor(
        name: string,
        material: string,
        weight: number,
        public numberOfDoors: number
    ) {
        super(name, material, weight);
        if (numberOfDoors <= 0) {
            throw new Error("Шафа повина мати хоча б одні двері");
        }
    }

    displayInfo(): void {
        console.log(`Шафа: ${this.name}, Матеріал: ${this.material}, Вага: ${this.weight}, Двері: ${this.numberOfDoors}`);
    }
}