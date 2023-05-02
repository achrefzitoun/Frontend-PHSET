import { GridEvaluation } from "./GridEvaluation";
import { MCQ } from "./MCQ";
import { User } from "./User";

export class Interview {
    idInterview!: number;
    refInterview!: string;
    dateInterview!: string;
    finInterview!: string;
    stateInterview!: string;
    noteFinal!: number;
    etatInterview!: string;
    typeInterview!: string;
    classroom: any; 
    juryAppreciation: any; 
    mcqs!: MCQ[]; 
    gridEvaluation!: GridEvaluation; 
    condidat!: User; 
    jury!: User[]; 
    }