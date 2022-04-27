import { IEventHandler } from "../../@shared/event/event-handler.interface";
import { CostumerChangeAddressEvent } from "./costumer-change-address.event";

export class CostumerChangeAddressHandler implements IEventHandler<CostumerChangeAddressEvent> {
    
    handle({eventData, dataTimeOccurred}: CostumerChangeAddressEvent): void {
        console.log(`Endereço do cliente: ${eventData.id}, ${eventData.name} alterado para: ${eventData.address}`);
    }

}