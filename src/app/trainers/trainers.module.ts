import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NavbarModule, WavesModule, ButtonsModule ,ModalModule,InputsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { TrainersRoutingModule } from './trainers-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    TrainersRoutingModule,
    FormsModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule,
    ModalModule,
    InputsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, HomeComponent, RegisterComponent],
  exports:[LoginComponent]
})
export class TrainersModule { }
