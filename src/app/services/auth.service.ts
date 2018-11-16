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

  constructor(private http: Http) { }

  registerTrainer(trainer) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/users/register', trainer, { headers: headers })
      .pipe(map(res => res.json()));
  }
}
