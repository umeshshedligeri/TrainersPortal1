import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainersRoutingModule } from './trainers-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    TrainersRoutingModule
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class TrainersModule { }
