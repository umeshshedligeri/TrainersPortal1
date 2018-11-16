import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateTrainer(trainer) {
    if (trainer.tname == undefined || trainer.temail == undefined || trainer.tpassword == undefined) {
      return false;
    }
    else {
      return true;
    }
  }

  validateEmail(temail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(temail).toLowerCase());
  }

  validatePassword(tpassword) {
    var re = /[a-z]\d|\d[a-z]/i;
    return re.test(tpassword) && tpassword.length > 3;
  }

  validateStudent(student) {
    if (student.tname == undefined || student.temail == undefined || student.tpassword == undefined) {
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


