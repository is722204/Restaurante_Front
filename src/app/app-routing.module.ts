import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../app/components/login/login.component'
import {PlatillosComponent} from '../app/components/platillos/platillos.component'
import { CartComponent } from './components/cart/cart.component';
import { MiddleGuard } from './middle.guard';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"platillos",component:PlatillosComponent, canActivate:[MiddleGuard]},
  {path:"cuenta",component:CartComponent,canActivate:[MiddleGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
