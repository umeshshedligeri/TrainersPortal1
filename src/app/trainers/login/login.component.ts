import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ngFlashMessageService:NgFlashMessageService) { }

  temail: string;
  tpassword: any;

  semail: string;
  spassword: any;

 

  ngOnInit() {
  }

}
