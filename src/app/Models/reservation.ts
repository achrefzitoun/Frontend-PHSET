import { Account } from "./account";
import { Event } from "./events";

export class Reservation {
    idRes!: number;
    dateRes!: Date;
    etatPres!: boolean;
    event!:Event;
    confirmPay!:boolean;
    account!:Account;
}
