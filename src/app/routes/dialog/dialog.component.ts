import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { PerdoruesApi } from '../../../shared/sdk/services/custom';
import { Perdorues } from '../../shared/sdk/models';
import { ModalService } from '../../shared/services/modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  //Subscribe/Unsubscribe to modalService
  private subscription;
  private punonjes: Perdorues;;

  @ViewChild('showPunonjesModal') public showPunonjesModal: any;

  constructor(
    private _modalService: ModalService,
    private _bsmodalService: BsModalService) { }

  ngOnInit() {
    this.subscription = this._modalService.cast.subscribe((value: Object) => {
      //Nese ka punonjes Object
      if (value && value['username']) {
        this.config.ignoreBackdropClick = false;
        this.punonjes = <Perdorues>value;
        this.modalRef = this._bsmodalService.show(this.showPunonjesModal, this.config);
      }
    })
  }
  ngOnDestroy() {
    console.log("Destroyed modal")
    this.subscription.unsubscribe();
  }
}
