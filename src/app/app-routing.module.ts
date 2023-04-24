import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './Front/authentication/authentication.component';
import { NavBarComponent } from './Front/nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'nav', component:NavBarComponent},
  {path:'signIn', component:AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
