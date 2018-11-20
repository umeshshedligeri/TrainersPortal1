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
    const user = {
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
    if (!this.validateservice.validateTrainer(user)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Fill in all details"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });

      return false;
    }

    //validate temail
    if (!this.validateservice.validateTrainerEmail(user.temail)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Enter valid mail"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    //validate tpassword  
    if (!this.validateservice.validateTrainerPassword(user.tpassword)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Password should contain atleast 3 char"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;

    }
    else{
    //Register trainer
    this.authservice.registerTrainer(user).subscribe(data => {
      if (data.success) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ["Logged In"],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        console.log(this.tname,this.temail,this.tmobile,this.taddress,this.tskills,this.taddress,this.texperience,this.tprofile,this.tdemovideo,this.tpassword)
        this.router.navigate(['/login']);
      } else {

        this.ngFlashMessageService.showFlashMessage({
          messages: ["Something went wrong"],
          dismissible: true,
          timeout: 3000,
          type: 'danger'
        });
        this.router.navigate(['/register']);
      }
    });
  }
  }

  onRegisterStudent() {
    const studentuser = {
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
    if (!this.validateservice.validateStudent(studentuser)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Fill in all details"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });

      return false;
    }

    //validate temail
    if (!this.validateservice.validateStudentEmail(studentuser.semail)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Please Enter valid mail"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    //validate tpassword  
    if (!this.validateservice.validateStudentPassword(studentuser.spassword)) {
      this.ngFlashMessageService.showFlashMessage({

        messages: ["Password should contain atleast 3 char"],
        dismissible: true,
        timeout: 3000,
        type: 'danger'
      });
      return false;
    }

    else{
      //Register trainer
      this.authservice.registerStudent(studentuser).subscribe(data => {
        if (data.success) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Logged In"],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          console.log(this.sname,this.semail,this.smobile,this.saddress,this.sprofile,this.sbranch,this.sgender,this.squalification,this.sdob,this.spassword)
          this.router.navigate(['/login']);
        } else {
  
          this.ngFlashMessageService.showFlashMessage({
            messages: ["Something went wrong"],
            dismissible: true,
            timeout: 3000,
            type: 'danger'
          });
          this.router.navigate(['/register']);
        }
      });
    }
  }
}
