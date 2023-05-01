import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { ListEventComponent } from './Front/list-event/list-event.component';
import { DetailEventComponent } from './Front/detail-event/detail-event.component';
import { PaiementComponent } from './Front/paiement/paiement.component';
import { UploadVideoComponent } from './Front/upload-video/upload-video.component';
import { ListPostComponent } from './Front/list-post/list-post.component';
import { SubjectApp0Component } from './Front/subject-app0/subject-app0.component';
import { APP0Component } from './Back/app0/app0.component';
import { EducationalEventComponent } from './Front/educational-event/educational-event.component';
import { AddEventComponent } from './Back/add-event/add-event.component';
import { ViewEventComponent } from './Back/view-event/view-event.component';
import { EditEventComponent } from './Back/edit-event/edit-event.component';
import { App0FrontComponent } from './Front/app0-front/app0-front.component';
import { LeisureEventComponent } from './Front/leisure-event/leisure-event.component';
import { EdiThematicComponent } from './Back/edi-thematic/edi-thematic.component';
import { SubjectListComponent } from './Back/subject-list/subject-list.component';
import { PlannigComponent } from './Back/plannig/plannig.component';
import { CertifComponent } from './Back/certif/certif.component';
import { ListSpeakerConfComponent } from './Back/list-speaker-conf/list-speaker-conf.component';
import { EditSpeakerComponent } from './Back/edit-speaker/edit-speaker.component';
import { FillSubjectComponent } from './Front/fill-subject/fill-subject.component';
import { CalenderComponent } from './Front/calender/calender.component';
import { StatComponent } from './Back/stat/stat.component';

const routes: Routes = [
  {path:'nav', component:NavBarComponent},
  {path:'events', component:ListEventComponent},
  {path:'event/:id', component:DetailEventComponent},
  {path:'paiement/:id', component:PaiementComponent},
  {path:'upload', component:UploadVideoComponent},
  {path:'listpost', component:ListPostComponent},
  {path:'subject', component:SubjectApp0Component},
  {path:'app',component:App0FrontComponent},
  {path:'leiseur', component:LeisureEventComponent},
  {path:'educ',component:EducationalEventComponent},
  {path:'addev', component:AddEventComponent},
  {path:'Viewev', component:ViewEventComponent},
  {path:'Editev/:id', component:EditEventComponent},
  {path:'app0det', component:APP0Component},
  {path:'editThem/:id',component:EdiThematicComponent},
  {path:'listSubj',component:SubjectListComponent},
  {path: 'pdf/:id', component:PlannigComponent},
  {path:'Certif',component:CertifComponent},
  {path:'speaker',component:ListSpeakerConfComponent},
  {path:'editSp/:id',component:EditSpeakerComponent},
  {path:'fill',component:FillSubjectComponent},
  {path:"calen",component:CalenderComponent},
  {path:"stat",component:StatComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
