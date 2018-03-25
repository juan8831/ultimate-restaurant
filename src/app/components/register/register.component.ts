import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer: Customer = {
    name: '',
    address: '',
    phone: '',
    role: 'customer'
  }

  id: string; //customer's email
  password: string;
  confirmPassword: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    if (!this.customer.name || !this.customer.address || !this.customer.phone
      || !this.password || !this.confirmPassword || !this.id) {
      this.flashMessage.show("Por favor completar toda la información", {
        cssClass: 'alert-danger', time: 4000
      });
      return;
    }

    if (this.confirmPassword != this.password) {
      this.flashMessage.show("La contraseña debe ser igual en ambos campos", {
        cssClass: 'alert-danger', time: 4000
      });
      return;
    }




    this.authService.register(this.id, this.password)
      .then(res => {

        this.customerService.newCustomer(this.customer, this.id);

        this.flashMessage.show("Gracias por crear una cuenta nueva!", {
          cssClass: 'alert-success', time: 4000
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        // this.flashMessage.show(err.message, {
        //   cssClass: 'alert-danger', time: 4000
        // });
        this.flashMessage.show("Ya existe una cuenta con este correo", {
          cssClass: 'alert-danger', time: 4000
        });

      })
  }

}
