import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { PerdoruesApi }   from '../shared/sdk/services/custom/Perdorues';
import { AuthGuard }      from './guards/auth.guard';
import { UnauthGuard }    from './guards/unauth.guard';
import { SipasRolit }     from './services/sipas-rolit.service';
import { IpapiService }               from './services/ipapi.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [  PerdoruesApi,
                AuthGuard,
                UnauthGuard,
                SipasRolit,
                IpapiService ]
})
export class AuthModule { }
