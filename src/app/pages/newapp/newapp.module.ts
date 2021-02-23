import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewappPageRoutingModule } from './newapp-routing.module';

import { NewappPage } from './newapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewappPageRoutingModule
  ],
  declarations: [NewappPage]
})
export class NewappPageModule {}
