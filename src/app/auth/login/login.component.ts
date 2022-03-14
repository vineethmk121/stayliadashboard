import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup = new FormGroup({
    "email":new FormControl(),
    "password":new FormControl()
  });
  constructor(private _authService:AuthService,private _router:Router) { }
  ngOnInit(): void {
  }
  login(){
    this._authService.login(this.formGroup.value).subscribe(res=>{
      localStorage.setItem('data',JSON.stringify(res.data));
      this._router.navigate(['/dashboard']);
      console.log(res);
    })
  }
}
