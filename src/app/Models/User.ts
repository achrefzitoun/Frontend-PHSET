import { Inscription } from "./Inscription";
import { Interview } from "./Interview";

export class User {
    idUser!: number;
    firstName!: string;
    lastName!: string;
    cin!: number;
    email!: string;
    phone!: string;
    address!: string;
    files!: string[];
    password!: string;
    passport!: string;
    birthDate!: Date;
    //civility!: string;
    //nationality!: string;
    //role!: string;
    //userAvailabilities!: any[]; 
    inscription!: Inscription; 
    interview!: Interview;
    interviewJury!: Interview[];
    }