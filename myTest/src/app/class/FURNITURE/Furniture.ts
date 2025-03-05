export abstract class Furniture {
    constructor(
      public name: string,
      public material: string,
      public weight: number
    ) {}
  
    abstract displayInfo(): void;
  
    getName(): string {
      return this.name;
    }
  
    getWeight(): number {
      return this.weight;
    }
    isPadded?: boolean; 
  }
  