import { Address } from '../value-objects/address';
import { Customer } from './customer'

describe("Customer Entity - Unit Test", () => {

    it("should throw error if id is empty", () => {
        expect(() => {
            const customer = new Customer("", "John Doe");
        }).toThrowError("Id is required")
    })

    it("should throw error name is empty", () => {
        expect(() => {
            const customer = new Customer("123", "");
        }).toThrowError("Name is required")
    })

    it("should create a customer", () => {
        const customer = new Customer("123", "John Doe");

        expect(customer.id).toEqual("123");
        expect(customer.name).toEqual("John Doe");
    })

    it("should change customer name", () => {
        const customer = new Customer("123", "John Doe");
        customer.changeName("John Lorem")

        expect(customer.id).toEqual("123");
        expect(customer.name).toEqual("John Lorem");
    })

    it("should change customer address", () => {
        const customer = new Customer("123", "John Doe");

        expect(customer.address).toBe(undefined)
        const address = new Address("street 1", 2, "123", "camacari")
        customer.changeAddress(address)

        expect(customer.address).toEqual(address)
    })

    it("should activate customer", () => {
        const customer = new Customer("123", "John Doe");

        expect(customer.isActive()).toBe(false)

        const address = new Address("street 1", 2, "123", "camacari")
        customer.changeAddress(address)
        customer.activate();

        expect(customer.isActive()).toBe(true)
    })

    it("should throw error when address is undefined when you activate a customer", () => {
        expect(() => {
          const customer = new Customer("1", "Customer 1");
          customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
      });
    
      it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");

        customer.deactivate();
    
        expect(customer.isActive()).toBe(false);
      });
    
      it("should add reward points", () => {
        const customer = new Customer("1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);
    
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);
    
        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
      });
})