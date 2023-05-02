import { Claim } from "./Claim";
import { Inscription } from "./Inscription";

export class Account {
    idAccount!: number;
    emailAccount!: string;
    passwordAcccount!: string;
    claims!: Claim[];
    inscription !: Inscription ;

    }