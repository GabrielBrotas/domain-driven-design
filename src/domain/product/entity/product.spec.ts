import { Product } from './product'

describe("Product Entity - Unit Test", () => {

    it("should throw error if id is empty", () => {
        expect(() => {
            const product = new Product("", "Product1", 10);
        }).toThrowError("Id is a required field")
    })

    it("should throw error name id is empty", () => {
        expect(() => {
            const product = new Product("123", "", 10);
        }).toThrowError("Name is a required field")
    })

    it("should throw error price lower or equal zero", () => {
        expect(() => {
            const product = new Product("123", "Product1", 0);
        }).toThrowError("Price must be greater than zero")
    })

    it("should create a product", () => {
        const product = new Product("123", "Product1", 10);

        expect(product.name).toEqual("Product1");
        expect(product.price).toEqual(10);
        expect(product.id).toEqual("123")
    })

    it("should change product name", () => {
        const product = new Product("123", "Product1", 10);
        
        product.changeName("Product2")

        expect(product.name).toEqual("Product2");
    })

    it("should change product price", () => {
        const product = new Product("123", "Product1", 10);
        
        product.changePrice(15)

        expect(product.price).toEqual(15);
    })
})