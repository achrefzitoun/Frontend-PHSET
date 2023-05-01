import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { FooterBackComponent } from './Back/footer-back/footer-back.component';
import { FooterComponent } from './Front/footer/footer.component';
import { ViewClaimsComponent } from './Front/view-claims/view-claims.component';
import { ViewOneClaimComponent } from './Front/view-one-claim/view-one-claim.component';
import { PassMcqComponent } from './Front/pass-mcq/pass-mcq.component';
import { ViewInterviewJuryComponent } from './Front/view-interview-jury/view-interview-jury.component';
import { ViewGridEvaluationComponent } from './Front/view-grid-evaluation/view-grid-evaluation.component';
import { MCQQuestionsComponent } from './Back/mcq-questions/mcq-questions.component';
import { ListQuestionsComponent } from './Back/list-questions/list-questions.component';
import { UpdateQuestionComponent } from './Back/update-question/update-question.component';
import { ClaimStaticsComponent } from './Back/claim-statics/claim-statics.component';
import { ListClaimsComponent } from './Back/list-claims/list-claims.component';
import { DecissionClaimComponent } from './Back/decission-claim/decission-claim.component';
import { ChatBotComponent } from './Front/chat-bot/chat-bot.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ClaimYearReportComponent } from './Back/claim-year-report/claim-year-report.component';
import { EvaluateurInterviewComponent } from './Back/evaluateur-interview/evaluateur-interview.component';
import { ClaimsExcelComponent } from './Back/claims-excel/claims-excel.component';
import { EvaluatorsCalanderComponent } from './Back/evaluators-calander/evaluators-calander.component';
import { DelibNoteComponent } from './Back/delib-note/delib-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddClaimComponent,
    NavBarBackComponent,
    FooterBackComponent,
    FooterComponent,
    ViewClaimsComponent,
    ViewOneClaimComponent,
    PassMcqComponent,
    ViewInterviewJuryComponent,
    ViewGridEvaluationComponent,
    MCQQuestionsComponent,
    ListQuestionsComponent,
    UpdateQuestionComponent,
    ClaimStaticsComponent,
    ListClaimsComponent,
    DecissionClaimComponent,
    ChatBotComponent,
    ClaimYearReportComponent,
    EvaluateurInterviewComponent,
    ClaimsExcelComponent,
    EvaluatorsCalanderComponent,
    DelibNoteComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
