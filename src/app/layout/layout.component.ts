import { Component, OnInit, OnDestroy } from '@angular/core';

import { RealTime } from '../shared/sdk/services';
import { Subscription } from 'rxjs/Subscription';
// import { PerdoruesApi } from '../shared/sdk/services/custom/Perdorues';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = new Array<Subscription>();

    constructor(
        // private _perdorues: PerdoruesApi,
        private _rt: RealTime,
    ) {
        this.subscriptions.push(
            this._rt.onReady().subscribe((res) => {
                console.log("Ready " + res)
            }),
            this._rt.IO.on("New_Finger_Skanned").subscribe((message: any) => {
                console.log(message);
            })
        )
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this._rt.connection.disconnect();
        this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

}
