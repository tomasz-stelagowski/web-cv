import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomecvComponent } from './homecv/homecv.component';

const routes: Routes = [
  {
    path:'home',
    component: HomecvComponent
  },{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
