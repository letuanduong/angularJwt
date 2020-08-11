import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {IGroup} from "../../groups/interface/group";
import {UserService} from "../service/user.service";
import {GroupService} from "../../groups/service/group.service";
import {Router} from "@angular/router";
import {IUser} from "../interface/user";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;
  groups: IGroup[];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) { }

  ngOnInit(): void {
    this.groupService.getAll().subscribe(group => this.groups = group);
    this.addUserForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      email: [null, [Validators.required, Validators.email]],
      groups_1: []
    })
  }

  get name(){
    return this.addUserForm.get('name');
  }

  get email(){
    return this.addUserForm.get('email');
  }

  submit() {
    let user = {
      name: this.addUserForm.value.name,
      email: this.addUserForm.value.email,
      groups_1: {
        id: this.addUserForm.value.groups_1,
      }
    }
    this.userService.add(user).subscribe();
    this.router.navigate(['users']);
  }
}
