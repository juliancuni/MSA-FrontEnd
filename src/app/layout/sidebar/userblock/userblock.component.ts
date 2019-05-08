import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';

import { Perdorues } from '../../../shared/sdk/models/Perdorues';
import { PerdoruesApi } from '../../../shared/sdk/services/custom';

@Component({
    selector: 'app-userblock',
    templateUrl: './userblock.component.html',
    styleUrls: ['./userblock.component.scss']
})
export class UserblockComponent implements OnInit {
    perdorues: Perdorues;
    constructor(
        public _userblockService: UserblockService,
        public _perdruesApi: PerdoruesApi,
    ) {
        
    }

    ngOnInit() {
        this._perdruesApi.findById(this._perdruesApi.getCurrentId()).subscribe((perdorues: Perdorues) => {
            this.perdorues = perdorues;
        })
    }

    userBlockIsVisible() {
        return this._userblockService.getVisibility();
    }

}
