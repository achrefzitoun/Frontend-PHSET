import { GridEvaluation } from "./GridEvaluation";
import { TaskEvaluation } from "./TaskEvaluation";

export class Evaluation {
    idEvaluation!: number;
    taskEval!: string;
    typeEvaluation!: string;
    //gridEvaluations!: GridEvaluation[];
    taskEvaluation!: TaskEvaluation[];
  }