import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from '../app/components/login/login.component'
import {PlatillosComponent} from '../app/components/platillos/platillos.component'
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"platillos",component:PlatillosComponent},
  {path:"cuenta",component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
