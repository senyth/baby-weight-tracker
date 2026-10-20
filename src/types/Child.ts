import type { Gender } from "./Gender";
import type { ISODate } from "./ISODate";

export interface Child {
    id: string;
    name: string;
    date: ISODate;     
    gender: Gender;
}