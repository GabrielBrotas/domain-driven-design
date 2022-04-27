import { ProductCreatedEvent } from "../../product/events/product-created.event";
import { SendEmailWhenProductCreatedHandler } from "../../product/events/product-created.handler";
import { EventDispatcher } from "./event-dispatcher";

describe("Domain Events Test", () => {

    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"].length).toBe(1);

        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);
    })

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregister("ProductCreatedEvent", eventHandler);

        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"].length).toBe(0);
    })

    it("should unregister all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();

        eventDispatcher.register("ProductCreatedEvent", eventHandler);
        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"][0]).toMatchObject(eventHandler);

        eventDispatcher.unregisterAll();

        expect(eventDispatcher.eventHandlers["ProductCreatedEvent"]).toBe(undefined);
    })

    it("should notify all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductCreatedHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("ProductCreatedEvent", eventHandler);

        const productCreatedEvent = new ProductCreatedEvent({
            id: 1,
            name: "Product 1",
            description: "Product 1 description",
            price: 10
        })
    
        eventDispatcher.notify(productCreatedEvent);

        expect(spyEventHandler).toHaveBeenCalled();
        expect(spyEventHandler).toHaveBeenCalledTimes(1);

    })
})