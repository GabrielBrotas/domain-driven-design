import { IEventHandler } from "../../@shared/event/event-handler.interface";
import { CostumerCreatedEvent } from "./costumer-created.event";

export class SendConsoleLogCostumerCreatedHandler1 implements IEventHandler<CostumerCreatedEvent> {
    
    handle(event: CostumerCreatedEvent): void {
        console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
    }

}