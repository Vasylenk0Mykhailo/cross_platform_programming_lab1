import { Chair } from './Chair';
import { Table } from './Table';
import { Wardrobe } from './Wardrobe';
import { Furniture } from './FURNITURE/Furniture';
import { TestBed } from '@angular/core/testing';

export class FurnitureFactory {
    static createFurniture(type: string, name: string, material: string, weight: number, extraFeature1: any, extraFeature2?: any): Furniture {
        switch (type.toLowerCase()) {
            case "chair":
                if (typeof extraFeature1 !== "boolean" || typeof extraFeature2 !== "boolean") {
                    throw new Error("Invalid parameters for Chair: isPadded and hasArmrests must be boolean");
                }
                return new Chair(name, material, weight, extraFeature1, extraFeature2);
            case "table":
                if (typeof extraFeature1 !== "number" || extraFeature1 <= 0) {
                    throw new Error("Invalid parameter for Table: numberOfLegs must be a positive number");
                }
                return new Table(name, material, weight, extraFeature1);
            case "wardrobe":
                if (typeof extraFeature1 !== "number" || extraFeature1 <= 0) {
                    throw new Error("Invalid parameter for Wardrobe: numberOfDoors must be a positive number");
                }
                return new Wardrobe(name, material, weight, extraFeature1);
            default:
                throw new Error("Unknown furniture type");
        }
    }
}


