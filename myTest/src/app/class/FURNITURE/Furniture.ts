export abstract class Furniture {
    constructor(
      public name: string,
      public material: string,
      public weight: number
    ) {
      if (!name || !material || weight <= 0) {
        throw new Error("Invalid furniture parameters");
      }
    }
  
    abstract displayInfo(): void;
  
    getName(): string {
      return this.name;
    }
  
    getWeight(): number {
      return this.weight;
    }
    isPadded?: boolean; 
  }
  