import { Account } from "./Account";
import { Decission } from "./Decission";
import { EtatClaim } from "./EtatClaim";

export class Claim {
    idClaim!: number;
    object!: string;
    content!: string;
    etat!: string;
    dateClaim!: string;
    image!: ArrayBuffer; 
    decission!:Decission  ; 
    account!:Account;
    
}