import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PollDetailComponent } from './components/poll-detail/poll-detail.component';
import { PollCreateComponent } from './components/poll-create/poll-create.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'polls/new',
    component: PollCreateComponent
  },
  {
    path: 'polls/:id',
    component: PollDetailComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);