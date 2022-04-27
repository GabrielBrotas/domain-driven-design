import { Address } from "../value-objects/address";
import { CustomerFactory } from "./customer.factory";

describe("Customer Factory Unit Test", () => {

    it("should create a customer", () => {
        const customerFactory = CustomerFactory.create("Jon");

        expect(customerFactory.id).toBeDefined();
        expect(customerFactory.name).toBe("Jon");   
        expect(customerFactory.address).toBeUndefined();   
    })

    it("should create a customer with address", () => {
        const address =  new Address("Street 1", 1, "Zip 1", "City 1");

        const customerFactory = CustomerFactory.createWithAddress("Jon", address);

        expect(customerFactory.id).toBeDefined();
        expect(customerFactory.name).toBe("Jon");
        expect(customerFactory.address).toMatchObject(address);
    })
})