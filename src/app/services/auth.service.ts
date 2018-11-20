import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/observable/of';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;
  studentuser:any;

  constructor(private http: Http) { }

  registerTrainer(user) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register/trainer', JSON.stringify(user), { headers: headers })
      .pipe(map(res => res.json()));
  }

  registerStudent(studentuser) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/register/student', JSON.stringify(studentuser), { headers: headers })
      .pipe(map(res => res.json()));
  }
}
