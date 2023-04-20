import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';
import { AddClaimComponent } from './Front/add-claim/add-claim.component';
import { NavBarBackComponent } from './Back/nav-bar-back/nav-bar-back.component';
import { FooterBackComponent } from './Back/footer-back/footer-back.component';
import { FooterComponent } from './Front/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddClaimComponent,
    NavBarBackComponent,
    FooterBackComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
