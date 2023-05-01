import { Evaluation } from "./Evaluation";
import { Interview } from "./Interview";

export class GridEvaluation {
    idGrid!: number;
    typeGrid!: string;
    scoreGrid!: number;
    evaluations!: Evaluation[];
    interview!: Interview;
  }