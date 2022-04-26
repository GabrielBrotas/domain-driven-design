export interface IAddress {
    get street(): string;
    get number(): number;
    get zip(): string;
    get city(): string;

    toString(): string
}