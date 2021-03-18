import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AuthconfigComponent } from './components/authconfig/authconfig.component';
import { AppRoutingModule } from './app-routing.module';
import { PostLoginComponent } from './components/post-login/post-login.component';
import { KeyValueEditorComponent } from './components/key-value-editor/key-value-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthconfigComponent,
    PostLoginComponent,
    KeyValueEditorComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
