import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/user";
import {environment} from "../../../environments/environment";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAll().subscribe(users => {
      this.users = users.filter(user =>
        user.id > 0
      );
    });
  }

  getUser(){
    this.userService.getById(1).subscribe(user => {
    this.user = user;
    console.log(this.user);
    })
  }

  delete(id: number) {
    this.userService.delete(id).subscribe();
  }

  search(event) {
    let keyword = event;
    this.users = this.users.filter(user => user.name.indexOf(keyword) != -1)
  }

}
