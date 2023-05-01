import { MCQ } from "./MCQ";
import { Response } from "./Response";

export class Question {
    idQuestion!: number;
    nameQuestion!: string;
    typeTest!: string;
    questionLevel!: string;
    mcqs!: MCQ[];
    responses!: Response[];
  }