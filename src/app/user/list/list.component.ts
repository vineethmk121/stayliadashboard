import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:any[] = [];
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe(res=>{
      this.users = res.data;
      console.log(res);
    })
  }

}
