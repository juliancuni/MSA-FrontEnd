import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class TokenGuard implements CanActivate { 
    constructor(private _router: Router) {}

    canActivate() {
        
        if (localStorage.getItem("token")) {
            return true;
        } else {
            this._router.navigate(['/token']);
            return false;
        }
    }
}