import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PerdoruesApi } from '../../shared/sdk/services/custom/Perdorues';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _auth: PerdoruesApi, private _router: Router) { }

    canActivate() {
        if (this._auth.isAuthenticated()) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
