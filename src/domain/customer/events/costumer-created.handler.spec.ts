import { EventDispatcher } from "../../@shared/event/event-dispatcher";
import { CostumerCreatedEvent } from "./costumer-created.event";
import { SendConsoleLogCostumerCreatedHandler1 } from "./costumer-created.handler1";
import { SendConsoleLogCostumerCreatedHandler2 } from "./costumer-created.handler2";

describe("Costumer Created Event Test", () => {

    it("should call costumer created event handler 1 and 2", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new SendConsoleLogCostumerCreatedHandler1();
        const eventHandler2 = new SendConsoleLogCostumerCreatedHandler2();

        const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
        const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

        eventDispatcher.register("CostumerCreatedEvent", eventHandler1);
        eventDispatcher.register("CostumerCreatedEvent", eventHandler2);

        expect(eventDispatcher.eventHandlers["CostumerCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["CostumerCreatedEvent"].length).toBe(2);
        expect(eventDispatcher.eventHandlers["CostumerCreatedEvent"][0]).toMatchObject(eventHandler1);
        expect(eventDispatcher.eventHandlers["CostumerCreatedEvent"][1]).toMatchObject(eventHandler2);
    
        const costumerCreatedEvent = new CostumerCreatedEvent({
            id: 1,
            name: "John Doe",
        })
    
        eventDispatcher.notify(costumerCreatedEvent);

        expect(spyEventHandler1).toHaveBeenCalled();
        expect(spyEventHandler2).toHaveBeenCalled();
        
        expect(spyEventHandler1).toHaveBeenCalledTimes(1);
        expect(spyEventHandler2).toHaveBeenCalledTimes(1);

    })

})