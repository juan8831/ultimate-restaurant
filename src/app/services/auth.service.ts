import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../services/customer.service';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  auth: any;
  isAdmin: Observable<boolean>;
  userEmail: string;
  constructor(private afAuth: AngularFireAuth, private customerService: CustomerService) {
    this.checkAdmin();
  }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err))
    });
  }

  getAuth() {
    if (this.auth) {
      return this.auth;
    }
    else {
      this.auth = this.afAuth.authState.map(auth => auth);
      return this.auth;
    }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  checkAdmin(): Observable<boolean> {
    return this.getAuth().switchMap(auth => {

      //Check for admin priv.
      return this.customerService.getCustomer(auth.email).map(customer => {
        if (customer.role == "admin") {
          return true;
        }
        else {
          //this.router.navigate(['/']);
          return false;
        }
      });
  });       
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
          err => reject(err))
    });

  }
}
