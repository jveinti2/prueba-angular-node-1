import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any;

  constructor(private usersServices: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersServices.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
  
  deleteUser(id: number) {
    this.usersServices.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
        this.getUsers();
      },
      (err) => console.error(err)
    );
  }
  
}
