import { IAddress } from "../value-objects/address.interface";

export interface ICustomer {
    get id(): string;
    get name(): string;
    get rewardPoints(): number;
    get address(): IAddress;

    changeName(name: string): void;
    isActive(): boolean;
    activate(): void;
    deactivate(): void;
    addRewardPoints(points: number): void;
}