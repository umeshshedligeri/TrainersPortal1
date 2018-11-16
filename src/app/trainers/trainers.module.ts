import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { NavbarModule, WavesModule, ButtonsModule ,ModalModule,InputsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';


import { TrainersRoutingModule } from './trainers-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';

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
    ReactiveFormsModule,
    NgFlashMessagesModule,
    HttpClientModule,
    HttpModule
    
  ],
  declarations: [LoginComponent, HomeComponent, RegisterComponent],
  exports:[LoginComponent],
  providers:[ValidateService,AuthService]
})
export class TrainersModule { }
