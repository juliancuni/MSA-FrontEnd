import { Injectable } from '@angular/core';

@Injectable()
export class SipasRolit {
    lejohetTaShohe(roletELejuara, roletQeKa) {
        return roletQeKa.some(function(roli) {
            return roletELejuara.includes(roli.name);
        }); 
    }
}