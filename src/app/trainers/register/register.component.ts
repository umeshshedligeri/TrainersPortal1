import { Component } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private validateservice: ValidateService,
    private ngFlashMessageService: NgFlashMessageService,
    private authservice: AuthService,
    private router: Router) { }

  // trainers data
  tname: string;
  temail: any;
  tmobile: number;
  taddress: string;
  tskills: string;
  texperience: number;
  tprofile: any;
  tdemovideo: any;
  tpassword: string;

  // student data

  sname: string;
  semail: any;
  smobile: number;
  saddress: string;
  sdob: any;
  squalification: string;
  sbranch: string;
  sgender: string;
  sprofile: any;
  spassword: string




  onRegisterTrainer() {
    const trainer = {
      tname: this.tname,
      temail: this.temail,
      tmobile: this.tmobile,
      taddress: this.taddress,
      tskills: this.tskills,
      texperience: this.texperience,
      tprofile: this.tprofile,
      tdemovideo: this.tprofile,
      tpassword: this.tpassword
    };

    //Required feilds
    if (!this.validateservice.validateTrainer(trainer)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Fill in all details"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });

      return false;
    }

    //validate temail
    if (!this.validateservice.validateEmail(trainer.temail)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Enter valid mail"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    //validate tpassword  
    if (!this.validateservice.validatePassword(trainer.tpassword)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Password should contain atleast 3 char"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;

    }
    //Register trainer
    this.authservice.registerTrainer(trainer).subscribe(data => {
      if (!data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['/register']);
      } else {

        this.ngFlashMessageService.showFlashMessage({
          messages: ["Logged in"],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['/login']);
      }
    });

  }

  onRegisterStudent() {
    const student = {
      sname: this.sname,
      semail: this.semail,
      smobile: this.smobile,
      saddress: this.saddress,
      sprofile: this.sprofile,
      sbranch: this.sbranch,
      sgender: this.sgender,
      squalification: this.squalification,
      sdob: this.sdob,
      spassword: this.spassword
    };
    //Required feilds
    if (!this.validateservice.validateStudent(student)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Fill in all details"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });

      return false;
    }

    //validate temail
    if (!this.validateservice.validateStudentEmail(student.semail)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Enter valid mail"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    //validate tpassword  
    if (!this.validateservice.validateStudentPassword(student.spassword)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Password should contain atleast 3 char"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }
  }
}
