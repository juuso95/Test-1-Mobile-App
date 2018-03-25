//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';

 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;


  
    // Creating the login-system by using authentication details
    public login(credentials) {
      if (credentials.email === null || credentials.password === null) {
        return Observable.throw("Please insert credentials");
      } else {
        return Observable.create(observer => {
          // At this point make a request to your backend to make a real check!
          
          
          observer.next(true);
          observer.complete();
        });
      }
    }
   // Creating the register-system by using authentication details
    public register(credentials) {
      if (credentials.email === null || credentials.password === null) {
        return Observable.throw("Please insert valid credentials");
      } else {
  
        // At this point store the credentials to your backend!
        return Observable.create(observer => {
          observer.next(true);
          observer.complete();
        });
      }
    }
    
  
 
  
 
  public getUserInfo() : User {
    return this.currentUser;
  }
  // Creating Logout-system
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
