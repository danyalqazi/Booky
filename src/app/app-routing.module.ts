import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {SidebarComponent} from'./sidebar/sidebar.component';
import{SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'signup',component:SignupComponent},
  
  {path:'**',redirectTo:''}
 
  // {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
