import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {CustomerService} from '../services/customer.service';
import {AuthService} from '../services/auth.service';
import { of } from 'rxjs/observable/of';
import {RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';



@Injectable()
export class AdminGuard implements CanActivate{
    constructor(
        private router: Router,
        private afAuth: AngularFireAuth,
        private customerService: CustomerService,
        private authService: AuthService
    )
    {
    }

    isAdmin: Observable<boolean>;
    email: string;

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean>{
        return this.authService.getAuth().switchMap(auth => {

            //Check for admin priv.
            return this.customerService.getCustomer(auth.email).map(customer => {
              if (customer.role == "admin") {
                return true;
              }
              else {
                this.router.navigate(['/']);
                return false;
              }
            });
        });

     }
 
    
}