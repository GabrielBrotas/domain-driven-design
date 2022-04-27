import { EventDispatcher } from "../../../@shared/event/event-dispatcher";
import { CustomerCreatedEvent } from "../customer-created.event";
import { SendConsoleLogCustomerCreatedHandler1 } from "./customer-created.handler1";
import { SendConsoleLogCustomerCreatedHandler2 } from "./customer-created.handler2";

describe("Customer Created Event Test", () => {

    it("should call customer created event handler 1 and 2", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogCustomerCreatedHandler1();
        const eventHandler2 = new SendConsoleLogCustomerCreatedHandler2();

        const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

        expect(eventDispatcher.eventHandlers["CustomerCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["CustomerCreatedEvent"].length).toBe(2);
        expect(eventDispatcher.eventHandlers["CustomerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.eventHandlers["CustomerCreatedEvent"][1]).toMatchObject(eventHandler2);
    
        const customerCreatedEvent = new CustomerCreatedEvent({
            id: 1,
            name: "John Doe",
        })
    
        eventDispatcher.notify(customerCreatedEvent);

        expect(spyEventHandler1).toHaveBeenCalled();
        expect(spyEventHandler2).toHaveBeenCalled();
        
        expect(spyEventHandler1).toHaveBeenCalledTimes(1);
        expect(spyEventHandler2).toHaveBeenCalledTimes(1);

    })

})