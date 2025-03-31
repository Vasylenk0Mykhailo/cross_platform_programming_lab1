import { Chair } from './Chair';
import { Table } from './Table';
import { Wardrobe } from './Wardrobe';
import { Furniture } from './FURNITURE/Furniture';
import { TestBed } from '@angular/core/testing';
import { FurnitureFactory } from './FurnitureFactory';

describe('Furniture Tests', () => {
    it('should create a Chair instance', () => {
        const chair = new Chair("Office Chair", "Wood", 10, true, false);
        expect(chair.getName()).toBe("Office Chair");
        expect(chair.getWeight()).toBe(10);
        expect(chair.isPadded).toBe(true);
        expect(chair.hasArmrests).toBe(false);
    });    

    it('should create a Table instance', () => {
        const table = new Table("Dining Table", "Metal", 20, 4);
        expect(table.getName()).toBe("Dining Table");
        expect(table.getWeight()).toBe(20);
        expect(table.numberOfLegs).toBe(4);
    });

    it('should create a Wardrobe instance', () => {
        const wardrobe = new Wardrobe("Bedroom Wardrobe", "Wood", 50, 2);
        expect(wardrobe.getName()).toBe("Bedroom Wardrobe");
        expect(wardrobe.getWeight()).toBe(50);
        expect(wardrobe.numberOfDoors).toBe(2);
    });

    it('should throw error for invalid table legs', () => {
        expect(() => new Table("Invalid Table", "Glass", 15, 0)).toThrowError("Стіл повинен мати хоча б 4 ніжки");
    });

    it('should throw error for invalid wardrobe doors', () => {
        expect(() => new Wardrobe("Broken Wardrobe", "Plastic", 30, 0)).toThrowError("Шафа повина мати хоча б одні двері");
    });

    it('should throw error for invalid furniture parameters', () => {
        expect(() => new Chair("", "Wood", 10, true, true)).toThrowError("Invalid furniture parameters");
    });

    it('should create furniture using factory', () => {
        const chair = FurnitureFactory.createFurniture("chair", "Gaming Chair", "Leather", 12, true, false);
        expect(chair).toBeInstanceOf(Chair);

        const table = FurnitureFactory.createFurniture("table", "Coffee Table", "Glass", 8, 4); 
        expect(table).toBeInstanceOf(Table);

        const wardrobe = FurnitureFactory.createFurniture("wardrobe", "Closet", "Metal", 40, 2);
        expect(wardrobe).toBeInstanceOf(Wardrobe);
    });

    it('should throw error for unknown furniture type', () => {
        expect(() => FurnitureFactory.createFurniture("bed", "King Bed", "Wood", 50, false)).toThrowError("Unknown furniture type");
    });

    it('should throw error for invalid chair parameters in factory', () => {
        expect(() => FurnitureFactory.createFurniture("chair", "Bad Chair", "Plastic", 5, "not boolean", true))
            .toThrowError("Invalid parameters for Chair: isPadded and hasArmrests must be boolean");
    });

    it('should throw error for invalid table parameters in factory', () => {
        expect(() => FurnitureFactory.createFurniture("table", "Bad Table", "Wood", 10, -1))
            .toThrowError("Invalid parameter for Table: numberOfLegs must be a positive number");
    });

    it('should throw error for invalid wardrobe parameters in factory', () => {
        expect(() => FurnitureFactory.createFurniture("wardrobe", "Bad Wardrobe", "Metal", 20, 0))
            .toThrowError("Invalid parameter for Wardrobe: numberOfDoors must be a positive number");
    });
});