import { OrderFactory } from "./order.factory";

describe("Order Factory Unit Test", () => {

    it("Should create an order", () => {
        const orderProps = {
            id: 'o1',
            customerId: 'c1',
            items: [
                {
                    id: 'oi1',
                    name: 'Product 1',
                    productId: 'p1',
                    price: 10,
                    quantity: 1
                }
            ]
        }

        const orderFactory = OrderFactory.create(orderProps);

        expect(orderFactory.id).toBe(orderProps.id);
        expect(orderFactory.customerId).toBe(orderProps.customerId);
        expect(orderFactory.items.length).toBe(1);
    })
})