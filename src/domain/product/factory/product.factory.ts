import { Product } from "../entity/product";
import { IProduct } from "../entity/product.interface";
import {v4 as uuidv4} from 'uuid';
import { ProductB } from "../entity/product-b";

export class ProductFactory {

    /*
    Be careful with Liskov Substitution Principle.
    every type of IProduct should be able to be created by ProductFactory.
    And every IProduct implementation should be able to replace the IProduct interface.
    */ 
    public static create(type: 'a'| 'b', name: string, price: number): IProduct {
        switch(type) {
            case 'a':
                return new Product(uuidv4(), name, price);
            case 'b':
                return new ProductB(uuidv4(), name, price);
            default:
                throw new Error(`Product type ${type} is not supported`);
        }
    }
}