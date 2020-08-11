import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import {GroupsModule} from "./groups/groups.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./author/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    GroupsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
