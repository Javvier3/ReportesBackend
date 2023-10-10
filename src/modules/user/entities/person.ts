import { Entity } from "../../../kernel/types";

export type TPerson = Entity<number> & {
    name: string;
    lastname: string;
    phone?: string;
    email: string;
};