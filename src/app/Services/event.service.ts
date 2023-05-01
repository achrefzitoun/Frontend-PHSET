import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certif } from '../Models/certif';
import { Speaker } from '../Models/speaker';
import { DatePipe } from '@angular/common';
import { Event } from '../Models/events';
import { Room } from '../Models/room';
import { Reservation } from '../Models/reservation';
import { Observable } from 'rxjs';
import { Paiement } from '../Models/paiement';
import { PostVideo } from '../Models/postvideo';
import { Subject } from '../Models/subject';
import { Thematic } from '../Models/thematic';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  apiUrl = 'http://localhost:8081/Rev/event/payer/';

  constructor(private http:HttpClient) { }

  getCertif(){
    return this.http.get<Certif[]>("http://localhost:8081/Rev/event/getCertifs");   
}

getEvents(){
  return this.http.get<Event[]>("http://localhost:8081/Rev/event/getEvent");
}

getImageUrl(image: ArrayBuffer): string {
  const blob = new Blob([image], { type: 'image/jpeg' });
  const url = URL.createObjectURL(blob);
  return url;
}

getEventById(id:number){
  return this.http.get<Event>("http://localhost:8081/Rev/event/getEvent/" + id);
}

getRoomByEvent(id:number){
  return this.http.get<Room>("http://localhost:8081/Rev/event/getRoombyEv/" + id);
}

reservationEvent(id:number){
  return this.http.put<Reservation>("http://localhost:8081/Rev/event/Reserv/" + id , null);
}

getReservById(id:number){
  return this.http.get<Reservation>("http://localhost:8081/Rev/event/getReservbyid/" + id);
}

getSpeakerById(id:number){
  return this.http.get<Speaker[]>("http://localhost:8081/Rev/event/spakersconfbyev/" + id)
}
getWithoutAPP0(){
  return this.http.get<Event[]>("http://localhost:8081/Rev/event/withoutapp0");
}

getEducEvent(){
  return this.http.get<Event[]>("http://localhost:8081/Rev/event/educEvents");
}
getLeisEvent(){
  return this.http.get<Event[]>("http://localhost:8081/Rev/event/leiseurEvents");
}

addEvent(event: Event, file: File , s: string, f: string) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('s', s);
  formData.append('f', f);
  formData.append('event', JSON.stringify(event));  
  return this.http.post('http://localhost:8081/Rev/event/addEvent', formData, { responseType: 'text' });
}


updateEvent(event: Event, file: File): Observable<Event> {
  const formData = new FormData();

  if(file==null){
    return this.http.put<Event>('http://localhost:8081/Rev/event/updatvent', event );
  }
  else{
    const ev2 = new Event;
    ev2.idEvent = event.idEvent;
    ev2.descriptionEvent = event.descriptionEvent;
    ev2.activationCode = event.activationCode;
    ev2.modeEvent = event.modeEvent
    ev2.modePay = event.modePay
    ev2.nbPartEvent = event.nbPartEvent
    ev2.priceEvent = event.priceEvent
    ev2.room = event.room
    ev2.titleEvent = event.titleEvent


    const s = new DatePipe('en-US').transform(event.dateS, "yyyy-MM-dd HH:mm:ss");
    const f = new DatePipe('en-US').transform(event.dateF, "yyyy-MM-dd HH:mm:ss");
    if (f !== null) {
      formData.append('f', f);
    }
    if (s !== null) {
      formData.append('s', s);
    }

    formData.append('file', file);
    formData.append('event', JSON.stringify(ev2));  
    return this.http.put<Event>('http://localhost:8081/Rev/event/updateEvent', formData );
  }
}

deleteEv(id:number){
  return this.http.delete("http://localhost:8081/Rev/event/deleteEvent/" + id);
}

getSpeakers(){
  return this.http.get<Speaker[]>("http://localhost:8081/Rev/event/getSpeaker");
  
}
addSpeaker(s:Speaker){
  return this.http.post('http://localhost:8081/Rev/event/addSpeaker',s ); 
}

getEventsSpeaker(){
  return this.http.get<Event[]>('http://localhost:8081/Rev/event/eventSpeak');
}

editSpeaker(speaker:Speaker){
  return this.http.put<Speaker>('http://localhost:8081/Rev/event/updateSpeaker',speaker);
}
deleteSpeaker(id:number){
  return this.http.delete("http://localhost:8081/Rev/event/deleteSpeaker/" + id);
}
getSpeakById(id:number){
  return this.http.get<Speaker>("http://localhost:8081/Rev/event/getSpeaker/" + id);
}


pay(pay: Paiement, id: number) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  const body = new URLSearchParams();
  body.set('montant', pay.montant.toString());
  body.set('stripeToken', pay.stripeToken);
  return this.http.post(this.apiUrl + id, body.toString(), { headers });
}


eventByres(id:number){
  return this.http.get<Event>("http://localhost:8081/Rev/event/eventbyreserv/"+id);
}

getPlanningPdf(id: number) {
  return this.http.get("http://localhost:8081/Rev/event/api/events/" +id ,{ responseType: 'blob' });
}


private corsUrl = 'https://cors-anywhere.herokuapp.com/';
  private dropboxUrl = 'https://www.dropbox.com/s/lnvgjwzr3tt8n5w/Postman%202023-03-05%2002-07-52.mp4?dl=0';
  private ok = `${this.corsUrl}${this.dropboxUrl}`;


  createPost(postVideo: PostVideo, video: File) : Observable<HttpResponse<any> | string> {
    const formData: FormData = new FormData();
    formData.append('post', JSON.stringify(postVideo));
    formData.append('video', video);
    return this.http.put('http://localhost:8081/Rev/event/CreatePost', formData, { responseType: 'text' });
  }

  getPosts(){
    return this.http.get<PostVideo[]>("http://localhost:8081/Rev/event/getPostVid");
  }
  
  getVideo(): Observable<Blob> {
    return this.http.get(this.ok, { responseType: 'blob' });
  }

  likePost(id:number){
    return this.http.put<void>("http://localhost:8081/Rev/event/postslike/"+ id , null);
  }
  
  eventsApp0(): Observable<Event>{
    return this.http.get<Event>("http://localhost:8081/Rev/event/withapp0");
  }

  getTeam(){
    return this.http.get<any>("http://localhost:8081/Rev/event/getTeamuser");
  }
  
  putSubjTeamThem(subject:Subject , idthem:number, name:string, idteam:number){
   
      
    return this.http.put("http://localhost:8081/Rev/event/addandAssSubject/"+ idthem+"/"+idteam+"/"+name, subject);
  }


  getSubject(){
    return this.http.get<Subject[]>("http://localhost:8081/Rev/event/getSubject");
  }

  getWinner(): Observable<any> {
    return this.http.get<string>("http://localhost:8081/Rev/event/getWinner")
  }
  
  getThematic(){
    return this.http.get<Thematic[]>("http://localhost:8081/Rev/event/getThematic");
  }

  addThematic(thematic:Thematic){
    return this.http.post("http://localhost:8081/Rev/event/addThem",thematic);
  }

  getThematicById(id:number){
    return this.http.get<Thematic>("http://localhost:8081/Rev/event/getThematic/"+id);
  }

  updateThematic(thematic:Thematic){
    return this.http.put("http://localhost:8081/Rev/event/updateThematic",thematic);
  }

  deleteThematic(id:number){
    return this.http.delete("http://localhost:8081/Rev/event/deleteThematic/"+id);
  }

  
  countEventsByType(): Observable<{[key: string]: number}> {
    return this.http.get<{[key: string]: number}>("http://localhost:8081/Rev/event/countEventsByType");
  }
}
