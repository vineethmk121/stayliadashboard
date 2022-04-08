import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'user-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  user:any;
 
  constructor(private _userService:UserService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    let id =this._route.snapshot.paramMap.get('id');
    if(id){
      this._userService.getUserDetail(id).subscribe(res=>{
        this.user = res.data;
        console.log(res.data);
      })
    }
  }

}
