import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Claim } from '../Models/Claim';
import { MCQ } from '../Models/MCQ';
import { Observable, catchError, throwError } from 'rxjs';
import { Interview } from '../Models/Interview';
import { GridEvaluation } from '../Models/GridEvaluation';
import { TaskEvaluation } from '../Models/TaskEvaluation';
import { Question } from '../Models/Question';
import { Response } from '../Models/Response';
import { User } from '../Models/User';
import { Decission } from '../Models/Decission';
import { EtatClaim } from '../Models/EtatClaim';
import { ClaimsByMonth } from '../Models/ClaimsByMonth';
import { Evaluation } from '../Models/Evaluation';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiUrl = 'http://localhost:8082/Rev/evaluation';

  constructor(private http: HttpClient) { }

  addClaim(claim: Claim, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('claim', JSON.stringify(claim));
    return this.http.post(`${this.apiUrl}/addClaimAndAssignAccount`, formData, { responseType: 'text' });
  }

  getMCQ(id: number){
    return this.http.get<any>(`${this.apiUrl}/retrieveMCQ/` + id);
  }

  setScoreToMCQ(idMcq : number, score: number){
    const params = new HttpParams().set('idmcq', idMcq).set('score', score);
    return this.http.put<MCQ>(`${this.apiUrl}/setScoreToMCQ`, params );
  }


  setScoreToTaskEvaluation(id: number, note: number, remark: string): Observable<void> {
    const params = new HttpParams().set('id', id.toString()).set('note', note.toString()).set('remark', remark);
    return this.http.put<void>(`${this.apiUrl}/setScoreToTaskEvaluation`, params);
  }


  getClaimsUser(){
    return this.http.get<Claim[]>(`${this.apiUrl}/getClaimsByAccount`);
  }

  getClaim(id: number){
    return this.http.get<Claim>(`${this.apiUrl}/retrieveClaim/`+id);
  }
    
  getInterviewjury(){
    return this.http.get<Interview[]>(`${this.apiUrl}/Interviewjury`);
  }
  
  retrieveGridEvaluation(id: number){
    return this.http.get<GridEvaluation>(`${this.apiUrl}/retrieveGridEvaluation/`+id);
  }


  getInterviewByGrid(id:number){
    return this.http.get<Interview>(`${this.apiUrl}/getInterviewByGrid/`+id);
  }

  addQuestionAndResponse(question: Question) {
    return this.http.put(`${this.apiUrl}/addQuestionAndResponse`, question);
  }
  
  retrieveAllQuestion(){
    return this.http.get<Question[]>(`${this.apiUrl}/retrieveAllQuestion`);
  }

  retrieveOneQuestion(id : number){
    return this.http.get<Question>(`${this.apiUrl}/retrieveQuestion/`+id);
  }


  updateQuestionAndResponse(question: Question): Observable<Question> {    
    return this.http.put<Question>(`${this.apiUrl}/updateQuestionAndResponse`, question);
  }

  deleteQuestion(id : number ){
    return this.http.delete(`${this.apiUrl}/delquestion/`+id);

  }

  getNoTraitedClaims(){
    return this.http.get<Claim[]>(`${this.apiUrl}/getNoTraitedClaims`);
  }

  getUserClaim(id : number){
    return this.http.get<User>(`${this.apiUrl}/getUserClaim/`+id);
  }

 
  addAndAssignDecissionToClaim(idclaim: number, decission: Decission, etatClaim: Object): Observable<any> {
    const url = `http://localhost:8082/Rev/evaluation/addAndAssignDecissionToClaim/${idclaim}/${etatClaim}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
  
    return this.http.put(`${this.apiUrl}/addAndAssignDecissionToClaim/${idclaim}/${etatClaim}`, decission, options);
  }
  
  countClaimsByMonth(): Observable<ClaimsByMonth> {
    return this.http.get<any>(`${this.apiUrl}/countClaimsByMonth`);

  }
  
  findevaluators(){
    return this.http.get<Interview[]>(`${this.apiUrl}/findevaluators`);
  }



  exportTraitedClaim(){
    return this.http.get(`${this.apiUrl}/excel`);
  }
  
  updatefiles(){
    return this.http.get(`${this.apiUrl}/updateexcel`);
  }

  getInterview(){
    return this.http.get<Interview[]>(`${this.apiUrl}/getInterview`);
  }

  getCurrentJuryInterview(){
    return this.http.get<Interview[]>(`${this.apiUrl}/getCurrentJuryInterview`);
  }

  addEvaluationAndTaskEvaluationAndAssignTaskToEvaluataion(evaluation: Evaluation): Observable<Evaluation> {
    return this.http.put<Evaluation>(`${this.apiUrl}/EvaluationaAndTasks`, evaluation);
  }

  retrieveAllEvaluations(){
    return this.http.get<Evaluation[]>(`${this.apiUrl}/retrieveAllEvaluations`);
  }


  searchClaims(date: string, firstName: string, object: string) {
    const params: Record<string, any> = {};
    if (date) {
      params['a'] = date;
    }
    if (firstName) {
      params['b'] = firstName;
    }
    if (object) {
      params['c'] = object;
    }
    return this.http.get<any[]>(`${this.apiUrl}/searchClaims`, { params });
  }

  tendanceReclamation(){
    return this.http.get<string>(`${this.apiUrl}/tendanceReclamation`, { responseType: 'text' as 'json' });
  }

  Sort(){
    return this.http.get<Claim[]>(`${this.apiUrl}/getClaimsSortedByPriority`);
  }
  
  countByEtatAndDateClaimIsAfter(){
    return this.http.get(`${this.apiUrl}/countByEtatAndDateClaimIsAfter`);
  }

  assignScoreToInterview(){
    return this.http.put(`${this.apiUrl}/assignScoreToInterview`,null);
  }

  desafecterProfInterview(idint:any,idprof:any){
    return this.http.put(`${this.apiUrl}/desafecterProfInterview/`+idint+`/`+0,null);

  }
}
