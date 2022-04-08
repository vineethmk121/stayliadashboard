import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'user-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  
  updateUser = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    gender:new FormControl(''),
    dob:new FormControl(''),
    img:new FormControl(''),
    urole:new FormControl(''),
    building:new FormControl(''),
    state:new FormControl(''),
    locality:new FormControl(''),
    country:new FormControl('USA')
  });
  constructor(private router:ActivatedRoute, private UserService:UserService) { }

  ngOnInit(): void {
    
  console.log(this.router.snapshot.paramMap.get('id'));
      this.UserService.getuData(this.router.snapshot.paramMap.get('id')).subscribe((res)=>{
         this.updateUser.patchValue({
          country:res.data.country,
          fname:res.data.fName,
          lname:res.data.lName,
          email:res.data.email,
          mobile:res.data.mobile,
          gender:res.data.gender,
          dob:res.data.dateOfBirth,
          urole:res.data.userType,
          building:res.data.building,
          state:res.data.state,
          locality:res.data.locality
         })
         console.log(res);
      })
    }
    updateUserData(){
        this.UserService.updateUser(this.router.snapshot.paramMap.get('id'),this.updateUser.value).subscribe((res)=>{
          console.log(res);
        })
    }
}
