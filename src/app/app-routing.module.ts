import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomecvComponent } from './homecv/homecv.component';
import { InconstructionComponent } from './inconstruction/inconstruction.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomecvComponent
  }, {
    path: 'education',
    component: HomecvComponent
  }, {
    path: 'awards',
    component: HomecvComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: InconstructionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
