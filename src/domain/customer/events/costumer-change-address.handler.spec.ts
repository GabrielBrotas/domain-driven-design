import { EventDispatcher } from "../../@shared/event/event-dispatcher";
import { CostumerChangeAddressEvent } from "./costumer-change-address.event";
import { CostumerChangeAddressHandler } from "./costumer-change-address.handler";

describe("Costumer Change Address Event", () => {

    it("should call costumer created event handler 1 and 2", () => {
        const eventDispatcher = new EventDispatcher();
        const costumerChangeAddressEventHandler = new CostumerChangeAddressHandler();

        const spyCostumerChangeAddressEventHandler = jest.spyOn(costumerChangeAddressEventHandler, "handle");

        eventDispatcher.register("CostumerChangeAddressEvent", costumerChangeAddressEventHandler);

        expect(eventDispatcher.eventHandlers["CostumerChangeAddressEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["CostumerChangeAddressEvent"].length).toBe(1);
        expect(eventDispatcher.eventHandlers["CostumerChangeAddressEvent"][0]).toMatchObject(costumerChangeAddressEventHandler);
    
        const costumerChangeAddressEvent = new CostumerChangeAddressEvent({
            id: 1,
            name: "John Doe",
            address: "Rua dois"
        })
    
        eventDispatcher.notify(costumerChangeAddressEvent);

        expect(spyCostumerChangeAddressEventHandler).toHaveBeenCalled();
        expect(spyCostumerChangeAddressEventHandler).toHaveBeenCalledTimes(1);
    })

})