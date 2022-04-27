import { IEvent } from "../../@shared/event/event.interface";

export class CostumerChangeAddressEvent implements IEvent {
    dataTimeOccurred: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dataTimeOccurred = new Date();
        this.eventData = eventData;
    }    
}