import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AddClientComponent} from './components/add-client/add-client.component';
import {EditClientComponent} from './components/edit-client/edit-client.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {SettingsComponent} from './components/settings/settings.component';
import {NotFoundComponent} from './components/not-found/not-found.component'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import {OrderDetailsComponent} from './components/order-details/order-details.component';
import {AddOrderComponent} from './components/add-order/add-order.component';
import {AdminAddOrderComponent} from './components/admin-add-order/admin-add-order.component';

import {AuthGuard} from './guards/auth.guard';
import {RegisterGuard} from './guards/register.guard';
import {AdminGuard} from './guards/admin.guard';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  {path: 'order/add', component: AddOrderComponent},
  {path: 'order/:id', component: OrderDetailsComponent},
  {path: 'admin/order/add', component: AdminAddOrderComponent, canActivate: [AdminGuard]},
  {path: 'client/add', component: AddClientComponent, canActivate:[AuthGuard]},
  {path: 'client/edit/:id', component: EditClientComponent, canActivate:[AuthGuard]},
  {path: 'client/:id', component: ClientDetailsComponent, canActivate:[AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, RegisterGuard, AdminGuard]
})
export class AppRoutingModule { }
