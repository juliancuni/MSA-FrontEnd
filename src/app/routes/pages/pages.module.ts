import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Error404Component } from './error404/error404.component';
import { RecoverComponent } from './recover/recover.component';
import { TokenComponent } from './token/token.component';
import { Error401Component } from './error401/error401.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, Error404Component, RecoverComponent, TokenComponent, Error401Component],
  imports: [
    SharedModule
  ],
  exports:[
    LoginComponent
  ]
})
export class PagesModule { }
