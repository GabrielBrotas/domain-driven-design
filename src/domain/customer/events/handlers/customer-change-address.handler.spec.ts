import { EventDispatcher } from "../../../@shared/event/event-dispatcher";
import { CustomerChangeAddressEvent } from "../customer-change-address.event";
import { CustomerChangeAddressHandler } from "./customer-change-address.handler";

describe("Customer Change Address Event", () => {

    it("should call customer created event handler 1 and 2", () => {
        const eventDispatcher = new EventDispatcher();
        const customerChangeAddressEventHandler = new CustomerChangeAddressHandler();

        const spyCustomerChangeAddressEventHandler = jest.spyOn(customerChangeAddressEventHandler, "handle");

        eventDispatcher.register("CustomerChangeAddressEvent", customerChangeAddressEventHandler);

        expect(eventDispatcher.eventHandlers["CustomerChangeAddressEvent"]).toBeDefined();
        expect(eventDispatcher.eventHandlers["CustomerChangeAddressEvent"].length).toBe(1);
        expect(eventDispatcher.eventHandlers["CustomerChangeAddressEvent"][0]).toMatchObject(customerChangeAddressEventHandler);
    
        const customerChangeAddressEvent = new CustomerChangeAddressEvent({
            id: 1,
            name: "John Doe",
            address: "Rua dois"
        })
    
        eventDispatcher.notify(customerChangeAddressEvent);

        expect(spyCustomerChangeAddressEventHandler).toHaveBeenCalled();
        expect(spyCustomerChangeAddressEventHandler).toHaveBeenCalledTimes(1);
    })

})