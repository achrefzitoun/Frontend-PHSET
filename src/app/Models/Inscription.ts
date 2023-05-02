import { Account } from "./Account";
import { User } from "./User";

export class Inscription {
    idInscription!: number;
    dateInscription!: Date;
    cv!: string;
    coverLetter!: string;
    classStudent!: string;
    departProf!: string;
    account!: Account;
    user !: User ;

    }