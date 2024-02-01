import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './component/training/training.component';
import {CurrentTrainingComponent} from "./component/current-training/current-training.component";
import { PastTrainingComponent } from './component/past-training/past-training.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { HeaderComponent } from './navigation/header/header.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { NewTrainingComponent } from './component/new-training/new-training.component';
import { StopTrainingComponent } from './component/stop-training/stop-training.component';
import {AuthService} from "./auth/service/auth.service";
import {TrainingService} from "./component/training/service/training.service";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    SideNavComponent,
    HeaderComponent,
    NewTrainingComponent,
    StopTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [AuthService,TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
