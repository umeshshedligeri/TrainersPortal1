import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateTrainer(user) {
    if (user.tname == undefined || user.temail == undefined || user.tpassword == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  validateTrainerEmail(temail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(temail).toLowerCase());
  }

  validateTrainerPassword(tpassword) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(tpassword) && tpassword.length > 3;
  }

  validateStudent(studentuser) {
    if (studentuser.sname == undefined || studentuser.semail == undefined || studentuser.spassword == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  validateStudentEmail(semail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(semail).toLowerCase());
  }

  validateStudentPassword(spassword) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(spassword) && spassword.length > 3;
  }



}


