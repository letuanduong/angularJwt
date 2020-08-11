import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserAddComponent } from './user-add/user-add.component';
import {RouterModule, Routes} from "@angular/router";
import {UserService} from "./service/user.service";
import {AppModule} from "../app.module";
import {MenuModule} from "../menu/menu.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: "", component: UserListComponent},
  {path: ":id/edit", component: UserEditComponent},
  {path: "add", component: UserAddComponent}
]

@NgModule({
  declarations: [UserDeleteComponent, UserListComponent, UserEditComponent, UserAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenuModule,
    ReactiveFormsModule
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
