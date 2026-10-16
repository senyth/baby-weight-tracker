export type Gender = "M" | "F";

export interface Child {
    id: string;
    name: string;
    birthday: Date;
    gender: Gender;
}