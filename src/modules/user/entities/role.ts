import { Entity } from "../../../kernel/types";

export type TRole = Entity<number> & {
    rolename: string;
};