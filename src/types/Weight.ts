import type { ISODate } from "./ISODate";

export interface Weight {
    id: string;
    childId: string;
    date: ISODate;
    weight: number;
}