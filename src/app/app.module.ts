import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarModule, WavesModule, ButtonsModule ,ModalModule,InputsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import {AuthService} from './services/auth.service'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule,
    ModalModule.forRoot(),
    InputsModule,
    NgFlashMessagesModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
