import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthconfigComponent } from './components/authconfig/authconfig.component';
import { PostLoginComponent } from './components/post-login/post-login.component';

const routes: Routes = [
  {path: 'config', component: AuthconfigComponent},
  {path: 'login/oauth2/code/github', component: PostLoginComponent},
  {path: '', redirectTo: '/config', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
