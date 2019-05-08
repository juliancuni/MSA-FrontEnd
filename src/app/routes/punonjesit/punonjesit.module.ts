import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: ListaComponent }
];


@NgModule({
  declarations: [ListaComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ], 
  exports: [RouterModule]
})
export class PunonjesitModule { }
