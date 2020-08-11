import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: "", component: GroupListComponent}
]

@NgModule({
  declarations: [GroupListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    GroupListComponent
  ]
})
export class GroupsModule { }
