import { Question } from "./Question";

export class Response {
    idResponse!: number;
    response!: string;
    correct!: boolean;
    question!: Question;
  }