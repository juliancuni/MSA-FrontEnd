import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PerdoruesApi, OrgApi } from '../../shared/sdk/services/custom';
import { Org } from '../../shared/sdk/models';

@Injectable()
export class UnauthGuard implements CanActivate {
    constructor(
        private _auth: PerdoruesApi,
        private _org: OrgApi,
        private _router: Router) { }

    canActivate() {
        if (localStorage.getItem("org_token")) {
            // this._router.navigate(['/login']);
            if (!this._auth.isAuthenticated()) {
                return true;
            } else {
                this._router.navigate(['/dashboard']);
                return false;
            }
        } else {
            var arr = window.location.href.split("/");
            var domain = arr[2];
            this._org.findOne({ where: { domain: domain } }).subscribe((org: Org) => {
                localStorage.setItem("org_token", org.id);
            }, (err) => {
                localStorage.removeItem("org_token");
                this._router.navigate(['/401']);
                return false;
            }, () => {
                this._router.navigate(['/login']);
                return true;
            })
        }
    }
}
