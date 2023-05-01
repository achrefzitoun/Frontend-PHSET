import { Team } from "./team";
import { Thematic } from "./thematic";

export class Subject {
    idSubject!:number;
    nameSubject!:string;
    descriptionSubject!:string;
    team!:Team;
    thematic!:Thematic;
}