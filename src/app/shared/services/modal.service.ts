import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  isShowing = false;
  private values = new Subject<Object>();
  cast = this.values.asObservable();
  
  open(values: Object) {
    console.log("Modal Service")
    this.values.next(values);
  }
}