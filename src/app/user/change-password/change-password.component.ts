import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../customValidator/confirm-password.validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePassword!: FormGroup;

  constructor(public service: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.changePassword = this.fb.group(
      {
        oldPassword: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator('newPassword', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    const body = {
      oldPassword: this.changePassword.get('oldPassword')?.value,
      newPassword: this.changePassword.get('newPassword')?.value,
    };
    this.service.changePassword(body).subscribe({
      next: (resp) => {
        console.log(resp);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Category updated successfully',
          showConfirmButton: false,
          timer: 2000,
        });
      },
      error: (error) => {
        console.log(error);
        Swal.fire(error.error.englishMessage);
      },
    });
  }

  get changePass() {
    return this.changePassword.controls;
  }
}
