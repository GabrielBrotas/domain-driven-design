import { IEventHandler } from "../../../@shared/event/event-handler.interface";
import { CustomerChangeAddressEvent } from "../customer-change-address.event";

export class CustomerChangeAddressHandler implements IEventHandler<CustomerChangeAddressEvent> {
    
    handle({eventData, dataTimeOccurred}: CustomerChangeAddressEvent): void {
        console.log(`Endereço do cliente: ${eventData.id}, ${eventData.name} alterado para: ${eventData.address}`);
    }

}