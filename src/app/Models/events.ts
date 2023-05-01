import { Room } from "./room";
import { Speaker } from "./speaker";

export class Event {
    idEvent!: number;
    titleEvent!: string;
    priceEvent!: number;
    nbPartEvent!: number;
    descriptionEvent!: string;
    dateS!: Date;
    dateF!: Date;
    activationCode!: string;
    imageEvent!: ArrayBuffer;
    modeEvent!: string;
    typeEvent!: string;
    modePay!:string;
    room!:Room;
    speakers!:Speaker[];
    speakersconf!:Speaker[];

  }