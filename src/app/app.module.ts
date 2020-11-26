import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home.component';
import { PageNotFoundComponent } from './pagenotfound/page-not-found.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';
import { TagModule } from './tags/tag.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    TagModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
