import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Parameter } from '../model/parameter';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  loginUrl = '';
  tokenUrl = '';
  clientId = '';
  clientKey = '';
  state = '';
  code = '';
  token = '';

  loginParams = new Map<string, string>();
  tokenParams = new Map<string, string>();

  loginParamChanges = new BehaviorSubject<Parameter[]>(this.asParamArray(this.loginParams));
  tokenParamChanges = new BehaviorSubject<Parameter[]>(this.asParamArray(this.tokenParams));

  constructor() { }

  setLoginParameter(name: string, value: string) {
    if (name) {
      if (value) {
        this.loginParams.set(name, value);
      } else {
        this.loginParams.delete(name);
      }
      this.loginParamChanges.next(this.asParamArray(this.loginParams));
    }
  }

  setTokenParameter(name: string, value: string) {
    if (name) {
      if (value) {
        this.tokenParams.set(name, value);
      } else {
        this.tokenParams.delete(name);
      }
      this.tokenParamChanges.next(this.asParamArray(this.tokenParams));
    }
  }

  asParamArray(pmap: Map<string, string>):Parameter[] {
    let parray = Array.from(pmap.entries()).map(entry => {
      return {
        'name' : entry[0], 
        'value' : entry[1]
      };
    });

    return parray.sort((a, b) => a.name.localeCompare(b.name));
  }

  login() {
    window.open(this.buildLoginUrl(), '_blank');
  }

  buildLoginUrl(): string {
    let url = this.loginUrl + '?client_id=' + encodeURIComponent(this.clientId)
    if (this.state) {
      url += `&state=${encodeURIComponent(this.state)}`;
    }

    if (this.loginParams != null && this.loginParams.size > 0) {
      for (let entry of this.loginParams.entries()) {
        url += `&${encodeURIComponent(entry[0])}=${encodeURIComponent(entry[1])}`;
      }
    }

    return url;
  }
}
