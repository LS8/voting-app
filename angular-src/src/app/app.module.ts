import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Router } from './app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'chart.js/src/chart.js';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { PollService } from './services/poll.service';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';
import { PollCreateButtonComponent } from './components/poll-create-button/poll-create-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PollDetailComponent,
    PollCreateComponent,
    PollCreateButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router,
    MaterializeModule,
    FlashMessagesModule,
    ChartsModule
  ],
  providers: [
    ValidateService,
    AuthService,
    PollService,
    AuthGuard,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
