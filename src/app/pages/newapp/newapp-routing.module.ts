import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewappPage } from './newapp.page';

const routes: Routes = [
  {
    path: '',
    component: NewappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewappPageRoutingModule {}
