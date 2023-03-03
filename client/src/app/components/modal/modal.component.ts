import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
    rol: '',
  };

  edit: boolean = false;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.usersService.getUser(id).subscribe(
        (res) => {
          console.log(res);
          this.user = res
          this.edit = true
        },
        (err) => console.error(err)
      );
    }
  }

  createUser() {
    this.usersService.createUser(this.user).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/users']);
      },
      (err) => console.error(err)
    );
  }

  updateUser() {
    // this.usersService.updateUser(this.user.id!, this.user).subscribe(
    console.log('fn updateUser');

    // )
  }
}
