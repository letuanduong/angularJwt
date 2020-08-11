import { Component, OnInit } from '@angular/core';
import {GroupService} from "../service/group.service";
import {IGroup} from "../interface/group";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: IGroup[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(){
    this.groupService.getAll().subscribe(groups => this.groups = groups)
  }
}
