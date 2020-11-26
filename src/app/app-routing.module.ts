import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: HomeComponent },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
