import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerdoruesApi } from '../../../shared/sdk/services/custom/Perdorues';
import { Perdorues } from '../../../shared/sdk/models/Perdorues';

import { MsToasterService, ModalService } from '../../../shared/services';
import { ToastModel } from '../../../shared/msInterfaces/interfaces';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    punonjesit: Perdorues[];
    prezent: number;
    punonjes: Perdorues;
    private toast: ToastModel;
    autorizuar: boolean = false;
    constructor(
        private _punonjesit: PerdoruesApi,
        private _modalService: ModalService,
        private _msToasterService: MsToasterService,
    ) {
        this._punonjesit.find({ where: { and: [{ enabled: true }, { meTimeAtt: true }] } }).subscribe((res: any) => {
            

            this.punonjesit = res.sort((a: Perdorues, b: Perdorues) => {
                return Number(b.checkedIn) - Number(a.checkedIn);
            });
            this.prezent = this.punonjesit.filter((punonjes: Perdorues) => { return punonjes.checkedIn == true }).length;
            // this.punonjes = res[0]; //Sa per test
        }, (err: any) => {
            this.autorizuar = false;
            this.toast = {
                type: "error",
                title: err.statusCode,
                body: err.message
            };
            this._msToasterService.toastData(this.toast);
        }, () => {

        })
    }

    ngOnInit() {
    }
    setPunonjes(punonjes: Perdorues) {
        console.log("HomeCMP SetPunonjes()")
        this._modalService.open(punonjes);
    }
}
