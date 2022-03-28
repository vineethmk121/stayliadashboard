import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: any[] = [];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res.data;
        console.log(res);
      },
      error: (error) => {
        console.log(error);
        Swal.fire(`${error.error.message}`);
      },
    });
  }
}
