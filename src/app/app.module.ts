import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from "./helpsers/jwt.interceptor";
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
