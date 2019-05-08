import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  valForm: FormGroup;

  constructor(public _settings: SettingsService, _fb: FormBuilder, private _router: Router) {
        this.valForm = _fb.group({
            'token': [null, Validators.compose([Validators.required])]
        });
    }

    submitForm($ev, value: any) {
      $ev.preventDefault();
      for (let c in this.valForm.controls) {
          this.valForm.controls[c].markAsTouched();
      }
      if (this.valForm.valid) {
          console.log(value);
          localStorage.setItem("org_token", value["token"]);
          this._router.navigate(['/login']);
      }
  }

  ngOnInit() {
  }

}
