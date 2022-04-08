import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'user-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  userForm!: FormGroup;
  ImagePreview!: string;
  Uroles : any;
  Ucountry:any;
  constructor(public service: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getRoles();
    this.country();
    this.userForm = this.fb.group({
      fName: [null, Validators.required],
      lName: [null, Validators.required],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ],
      ],
      userType: ['agent'],
      gender: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      dateOfBirth: [null, Validators.required],
      profilePic: [null, Validators.required],
      building: [null, Validators.required],
      state: [null, Validators.required],
      locality: [null, Validators.required],
      country: ['62137b1ffdaf8726cc935366'],
      password: ['sds32e45re345', Validators.required],
      userRole: ['6234893d8d3d961d60c1583c'],
      // roleId: [null],
      parentAgency: [null],
    });
  }
  // Upload File
  uploadFiles(event: any): void {
    const file = event.target.files[0];
    console.log(file);

    this.userForm.patchValue({
      profilePic: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.ImagePreview = reader.result as string;
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  //ADD USER
  addUser() {
    console.log(this.userForm);
    if (this.userForm.invalid) {
      Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.controls[key].markAsTouched();
      });
      return;
    }
    const UserForm = this.userForm.value;
    let formData = new FormData();
    for (let x in UserForm) {
      formData.append(`${x}`, UserForm[x]);
    }
    this.service.addUser(formData).subscribe({
      next: (resp) => {
        console.log(resp);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getRoles() {
    this.service.getRoles().subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.Uroles = resp.data;
        console.log(this.Uroles);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  country() {
    this.service.getCountry().subscribe({
      next: (resp: any) => {
        console.log(resp); 
        this.Ucountry = resp.data;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  get userFormControl() {
    return this.userForm.controls;
  }
}
