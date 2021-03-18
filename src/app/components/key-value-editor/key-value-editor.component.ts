import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, EMPTY, Subscription  } from 'rxjs';
import { Parameter } from '../../model/parameter';

@Component({
  selector: 'app-key-value-editor',
  templateUrl: './key-value-editor.component.html',
  styleUrls: ['./key-value-editor.component.css']
})
export class KeyValueEditorComponent implements OnInit, OnDestroy {
  @Input()
  title = '';

  private _datasource: Observable<Parameter[]> = EMPTY;
  private _datasourceSub: Subscription = Subscription.EMPTY;

  length = 0;

  @Input()
  set datasource(value: Observable<Parameter[]>) {
    this._datasourceSub.unsubscribe();
    this._datasource = value;
    this._datasourceSub = this._datasource.subscribe(plist => {
      this.length = plist ? plist.length : 0;
    });
  }

  get datasource() {
    return this._datasource;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._datasourceSub.unsubscribe();
  }
}
