import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DataComponent } from './data/data.component';

const routes = [
  { path: '', component: DataComponent }
]

@NgModule({
  declarations: [DataComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ], 
  exports: [ RouterModule ]
})
export class NdermarrjaModule { }
