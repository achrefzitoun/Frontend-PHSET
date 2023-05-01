import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { ViewClaimsComponent } from './Front/view-claims/view-claims.component';
import { ViewOneClaimComponent } from './Front/view-one-claim/view-one-claim.component';
import { PassMcqComponent } from './Front/pass-mcq/pass-mcq.component';
import { ViewInterviewJuryComponent } from './Front/view-interview-jury/view-interview-jury.component';
import { ViewGridEvaluationComponent } from './Front/view-grid-evaluation/view-grid-evaluation.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { MCQQuestionsComponent } from './Back/mcq-questions/mcq-questions.component';
import { ListQuestionsComponent } from './Back/list-questions/list-questions.component';
import { UpdateQuestionComponent } from './Back/update-question/update-question.component';
import { ClaimStaticsComponent } from './Back/claim-statics/claim-statics.component';
import { ListClaimsComponent } from './Back/list-claims/list-claims.component';
import { DecissionClaimComponent } from './Back/decission-claim/decission-claim.component';
import { ChatBotComponent } from './Front/chat-bot/chat-bot.component';
import { ClaimYearReportComponent } from './Back/claim-year-report/claim-year-report.component';
import { EvaluateurInterviewComponent } from './Back/evaluateur-interview/evaluateur-interview.component';
import { ClaimsExcelComponent } from './Back/claims-excel/claims-excel.component';
import { EvaluatorsCalanderComponent } from './Back/evaluators-calander/evaluators-calander.component';
import { DelibNoteComponent } from './Back/delib-note/delib-note.component';

const routes: Routes = [
  {path:'newclaims', component:AddClaimComponent},
  {path:'grid',component:ViewGridEvaluationComponent},
  {path:'claims', component:ViewClaimsComponent},
  {path:'claim/view', component:ViewOneClaimComponent},
  {path:'mcq', component:PassMcqComponent},
  {path:'InterviewList', component:ViewInterviewJuryComponent},
  {path:'navback',component:NavBarBackComponent},
  {path:'questions',component:MCQQuestionsComponent},
  {path:'listquestions',component:ListQuestionsComponent},
  {path:'updateQuest',component:UpdateQuestionComponent},
  {path:'claimstatics',component:ClaimStaticsComponent},
  {path:'claimlist', component:ListClaimsComponent},
  {path:'decission',component:DecissionClaimComponent},
  {path:'chaimreport',component:ClaimYearReportComponent},
  {path:'listevalint',component:EvaluateurInterviewComponent},
  {path:'Excel', component:ClaimsExcelComponent},
  {path:'evalcalander',component:EvaluatorsCalanderComponent},
  {path:'delib',component:DelibNoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
