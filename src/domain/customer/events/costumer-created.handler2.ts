import { IEventHandler } from "../../@shared/event/event-handler.interface";
import { CostumerCreatedEvent } from "./costumer-created.event";

export class SendConsoleLogCostumerCreatedHandler2 implements IEventHandler<CostumerCreatedEvent> {
    
    handle(event: CostumerCreatedEvent): void {
        console.log(`Esse é o segundo console.log do evento: CustomerCreated`);
    }

}