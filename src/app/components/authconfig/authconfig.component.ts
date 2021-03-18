import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscribable } from 'rxjs';
import { OauthService } from '../../services/oauth.service';
import { Parameter } from '../../model/parameter';

const responseTypes = ["code", "token"];

@Component({
  selector: 'app-authconfig',
  templateUrl: './authconfig.component.html',
  styleUrls: ['./authconfig.component.css']
})
export class AuthconfigComponent implements OnInit {
  authForm = this.formBuilder.group({
    clientId: ['', Validators.required],
    clientKey: ['', Validators.required],
    loginUrl: ['', Validators.required],
    state: ['']
  });

  nLoginParams = 0;
  nTokenParams = 0;

  constructor(private formBuilder: FormBuilder,
    private oauthService: OauthService) {}

  ngOnInit(): void {
    this.authForm.controls.loginUrl.setValue(this.oauthService.loginUrl);
    this.authForm.controls.clientId.setValue(this.oauthService.clientId);
    this.authForm.controls.clientKey.setValue(this.oauthService.clientKey);

    this.authForm.controls.loginUrl.valueChanges.subscribe(val => {
      this.oauthService.loginUrl = val;
    });

    this.authForm.controls.clientId.valueChanges.subscribe(val => {
      this.oauthService.clientId = val;
    });

    this.authForm.controls.clientKey.valueChanges.subscribe(val => {
      this.oauthService.clientKey = val;
    });

    this.loginParameters.subscribe(plist => {
      this.nLoginParams = plist ? plist.length : 0;
    });

    this.tokenParameters.subscribe(plist => {
      this.nTokenParams = plist ? plist.length : 0;
    });
  }

  get loginParameters(): Subscribable<Parameter[]> {
    return this.oauthService.loginParamChanges;
  }

  get tokenParameters(): Subscribable<Parameter[]> {
    return this.oauthService.tokenParamChanges;
  }

  login() {
    this.oauthService.login();
  }

  isInvalid(controlId: string): boolean {
    const ctrl = this.authForm.controls[controlId];
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }
}
