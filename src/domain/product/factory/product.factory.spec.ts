import { ProductFactory } from "./product.factory";

describe("Product Factory Unit Test", () => {

    it("Should create a product type A", () => {
        const productA = ProductFactory.create("a", "Product A", 10);
        
        expect(productA.id).toBeDefined();
        expect(productA.name).toBe("Product A");
        expect(productA.price).toBe(10);
        
        expect(productA.constructor.name).toBe("Product");
    })

    it("Should create a product type B", () => {
        const productB = ProductFactory.create("b", "Product B", 10);
        
        expect(productB.id).toBeDefined();
        expect(productB.name).toBe("Product B");
        expect(productB.price).toBe(20);
        
        expect(productB.constructor.name).toBe("ProductB");
    })

    it("should throw error if product type is not supported", () => {
        expect(() => {
            ProductFactory.create("c" as any, "Product C", 10);
        }).toThrowError(`Product type c is not supported`);
    })
})