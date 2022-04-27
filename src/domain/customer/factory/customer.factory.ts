import { ICustomer } from "../entity/customer.interface";
import { v4 as uuidv4 } from 'uuid'
import { Customer } from "../entity/customer";
import { Address } from "../value-objects/address";


// Now we can create variations of customers
export class CustomerFactory {

    public static create(name: string): ICustomer {
        return new Customer(uuidv4(), name);
    }

    public static createWithAddress(name: string, address: Address): ICustomer {
        const customer = new Customer(uuidv4(), name);
        customer.changeAddress(address);
        return customer
    }
}