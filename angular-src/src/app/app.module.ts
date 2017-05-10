import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Router } from './app.routing';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router,
    MaterializeModule,
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
