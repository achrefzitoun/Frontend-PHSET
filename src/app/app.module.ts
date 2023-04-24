import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { FooterBackComponent } from './Back/footer-back/footer-back.component';
import { FooterComponent } from './Front/footer/footer.component';
import { AuthenticationComponent } from './Front/authentication/authentication.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { AuthInterceptor } from './Front/authentication/AuthInterceptor';
import { ErrorInterceptor } from './Front/authentication/ErrorInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddClaimComponent,
    NavBarBackComponent,
    FooterBackComponent,
    FooterComponent,
    AuthenticationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
