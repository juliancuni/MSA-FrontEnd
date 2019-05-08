// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import  { PerdoruesApi } from '../sdk/services/custom/Perdorues';
// import  { Perdorues } from '../sdk/models';
// @Injectable()

// export class KyPerdoruesService {
//     private perdorues: Perdorues;
//     private kyPerdorues = new BehaviorSubject<Perdorues>(this.perdorues);
//     cast = this.kyPerdorues.asObservable();

//     constructor(private _perdorues: PerdoruesApi) {
//         // this._perdorues.findById(_perdorues.getCurrentId()).subscribe((perdorues: Perdorues) => {
//         //     this.perdorues = perdorues;
//         //     console.log("Nga Perdorues service: ", this.perdorues);
//         // }, (err) => {

//         // }, () => {
            
//         // })
//     }

//     toastData(kyPerdorues: Perdorues) {
//         this.kyPerdorues.next(kyPerdorues);
//     }

// } 