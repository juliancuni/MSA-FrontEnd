import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IpapiService {
    constructor(private _http: Http) { }
    
    gjejIpData(ip) {
        //console.log(ip);
        let url = "https://microservices.al/json/"
        return this._http.get(url + ip);
    }
}