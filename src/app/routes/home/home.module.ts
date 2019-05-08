import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogComponent } from '../dialog/dialog.component';

import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'diag', component: DialogComponent },
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes),
        
    ],
    declarations: [HomeComponent, DialogComponent],
    exports: [
        RouterModule,
    ]
})
export class HomeModule { }
