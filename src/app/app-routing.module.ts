import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {LoginComponent} from "./auth/login/login.component";
import {TrainingComponent} from "./component/training/training.component";
import {AuthAGuard} from "./auth/auth-a.guard";

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'training',component:TrainingComponent, canActivate:[
      AuthAGuard
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
