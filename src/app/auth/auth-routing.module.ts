import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from 'src/app/core/Guards/AuthGuard';

const routes: Routes = [

  
  { path: 'login', component: LoginComponent , canActivate : [AuthGuard]},
  { path: 'register', component: RegisterComponent ,canActivate : [AuthGuard] },
  { path: 'logout', component: RegisterComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
